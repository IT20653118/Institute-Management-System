import React from 'react'
import "../style.css"
import axios from "axios";
import {useState} from "react";
import Header from '../components/Header'
import swal from 'sweetalert';
import { Button } from 'react-bootstrap';

export default function TeacherAddclass() {

  const [day, setDay] = useState("");
  const [sTime, setsTime] = useState("");
  const [eTime, seteTime] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [teacher, setTeacher] = useState("");
  const [hallNo, setHallNo] = useState("");
  const [wLink, setwLink] = useState("");
    
    const newClass = {
      day,
      sTime,
      eTime,
      grade,
      subject,
      teacher,
      hallNo,
      wLink  
    }
    function sendData(e) {
      e.preventDefault();
      if(day.length === 0 || sTime.length === 0 || eTime.length === 0 || grade.length === 0 || subject.length === 0 || teacher.length === 0 || hallNo.length === 0 || wLink.length === 0 ){
        swal(" Fields Cannot empty !","Please enter all data !", "error");
      }else{
        console.log(newClass);
        axios.post(`http://localhost:5000/api/classes/`, newClass).then(function(response)  {
          setDay("");
          setsTime("");
          seteTime("");
          setGrade("");
          setSubject("");
          setTeacher("");
          setHallNo("");
          setwLink("");
          //alert("Class Added")
        }).catch(function(err) {
            //alert(err);
            console.log();
      })
        swal({ text: "Successfully Added", icon: "success", button: "Okay!"})
        .then((value) => {
        window.location = '/ttT'; 
      });}
    }

    //Demo Button
    function demoData(e){ 
      setDay('Tuesday');
      setsTime('10:00');
      seteTime('12:00');
      setGrade('7');
      setSubject('Science');
      setTeacher('Mrs. Hansi');
      setHallNo('IMS02');
      setwLink('www.zoom.us1');
    }

  return (
    <div>
      <Header/>
      <br />
      <br />
      
      <div className="row">
        <div className="col-3"></div>
        <div className="col-3">
          <br/>
          <br/>
        <h1>Schedule a class</h1><br /> 
          <form style={{ width: '500px' }} onSubmit={sendData}>

          <div className="mb-3">
              <label for="day" className="form-label">Day of Week</label>
              <select className="form-select" aria-label="Default select example" value={day} onChange={(e)=>{setDay(e.target.value)}}>
              <option selected>Select Day</option>
              <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>
            </div>

            <div className="mb-3">
              <label for="time" className="form-label">From</label>
              <input type="time" id="inputTime" className="form-control" placeholder="08.30-10.30" value={sTime} onChange={(e)=>{setsTime(e.target.value)}} />
            </div>
            <div className="mb-3">
              <label for="time" className="form-label">To</label>
              <input type="time" id="inputTime" className="form-control" placeholder="08.30-10.30" value={eTime} onChange={(e)=>{seteTime(e.target.value)}} />
            </div>

            <div className="mb-3">
              <label for="grade" className="form-label">Grade</label>
              <select className="form-select" aria-label="Default select example" value={grade} onChange={(e)=>{setGrade(e.target.value)}}>
              <option selected>Select Grade</option>
              <option value="6">Grade 6</option>
                <option value="7">Grade 7</option>
                <option value="8">Grade 8</option>
                <option value="9">Grade 9</option>
                <option value="10">Grade 10</option>
                <option value="11">Grade 11</option>
                <option value="12">Grade 12</option>
                <option value="13">Grade 13</option> 
              </select>
            </div>

            <div className="mb-3">
              <label for="subject" className="form-label">Subject</label>
              <select className="form-select" aria-label="Default select example" value={subject} onChange={(e)=>{setSubject(e.target.value)}}>
              <option selected>Select Subject</option>
              <option value="Mathematics">Mathematics</option>
                <option value="Buddhism">Buddhism</option>
                <option value="History">History</option>
                <option value="Art">Art</option>
                <option value="Sinhala">Sinhala</option>
                <option value="Technology">Technology</option>
                <option value="Science">Science</option>
                <option value="English">English</option>
                <option value="Geography">Geography</option>
              </select>
            </div>

            <div className="mb-3">
              <label for="teacher" className="form-label">Teacher Name</label>
              <select className="form-select" aria-label="Default select example" value={teacher} onChange={(e)=>{setTeacher(e.target.value)}}>
              <option selected>Select Teacher</option>
              <option value="Mr. Anuradha">Mr. Anuradha</option>
                <option value="Mr. Amal">Mr. Amal</option>
                <option value="Mrs. Hansi">Mrs. Hansi</option>
              </select>
            </div>

            <div className="mb-3">
              <label for="hallNo" className="form-label">Hall No.</label>
              <select className="form-select" aria-label="Default select example" value={hallNo} onChange={(e)=>{setHallNo(e.target.value)}}>
              <option selected>Select Hall</option>
              <option value="IMS01">IMS01</option>
                <option value="IMS02">IMS02</option>
                <option value="IMS03">IMS03</option>
                <option value="IMS04">IMS04</option>
                <option value="IMS05">IMS05</option>
                <option value="IMS06">IMS06</option>
                <option value="IMS07">IMS07</option>
                <option value="IMS08">IMS08</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="webinarLink" className="form-label">Webinar Link</label>
              <input type="text" id="inputLink" className="form-control" placeholder="www.zoom.us" value={wLink} onChange={(e)=>{setwLink(e.target.value)}}/>
            </div>

            <button type="submit" className="btn btn-primary me-3">Add Class</button>
            <Button variant='success' onClick={demoData}>Demo</Button>
            
            <br/> <br/> <br/>
          </form>
        </div>
      </div>
    </div>
  )
}
