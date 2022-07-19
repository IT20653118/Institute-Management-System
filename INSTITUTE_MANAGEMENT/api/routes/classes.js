const router = require("express").Router();
const Class = require("../models/Class");

//CREATE CLASS
router.post("/", async (req, res) => {
  const newClass = new Class({
    tScheduleID:req.body.tScheduleID,
    day:req.body.day,
    sTime:req.body.sTime,
    eTime:req.body.eTime,
    grade:req.body.grade,
    subject:req.body.subject,
    teacher:req.body.teacher,
    hallNo:req.body.hallNo,
    wLink:req.body.wLink
  });
  let code = 1;
  try{
    const clscount = await Class.find().sort({_id:-1}).limit(1)
    if(clscount.length > 0)
    code += clscount[0].code
      newClass.tScheduleID='TS00' + code;
      newClass.code = code;
    try {
      const savedClass = await newClass.save();
      res.status(200).json(savedClass);
    } catch (err) {
      res.status(500).json(err);
    }
  }catch(error){
    console.log(error)
  } 
});

//GET CLASS
router.get("/:tScheduleID", async (req, res) => {
  try {
    const viewClass = await Class.findOne({'tScheduleID':req.params.tScheduleID});
    res.status(200).json(viewClass);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL CLASSES
router.get("/", async (req, res) => {
    
  try {
    const viewClasses = await Class.find();
    res.status(200).json(viewClasses);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE CLASS
router.put("/updatecls/:tScheduleID", async(req, res) => {

  try {
    const updatedClass = await Class.findOneAndUpdate(
      {'tScheduleID':req.params.tScheduleID},
      {
        $set: req.body
      },
      {new:true}
    );
    res.status(200).json(updatedClass);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE CLASS
router.delete("/deletecls/:tScheduleID", async(req, res) => {
  try {
    await Class.findOneAndDelete({'tScheduleID':req.params.tScheduleID});
    res.status(200).json("Schedule has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET TIMETABLE SCHEDULE ACCORDING TO GRADE
router.get("/grcs/:grade", async (req, res) => {
  try {
    const classes = await Class.find({'grade':req.params.grade});
    res.status(200).json(classes);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//GET TIMETABLE SCHEDULE ACCORDING TO DAY
router.get("/dycs/:day", async (req, res) => {
  try {
    const classes = await Class.find({'day':req.params.day});
    res.status(200).json(classes);
  } catch (err) {
    return res.status(500).json(err);
  }
}); 

module.exports = router;
  