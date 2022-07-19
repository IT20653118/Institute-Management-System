import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from "axios";
import swal from 'sweetalert';

export default function UpdateModal(props) {

  const [tScheduleID, settScheduleID] = useState("");
  const [show, setShow] = useState(false);

  const [day, setDay] = useState("");
  const [sTime, setsTime] = useState("");
  const [eTime, seteTime] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [teacher, setTeacher] = useState("");
  const [hallNo, setHallNo] = useState("");
  const [wLink, setwLink] = useState("");

  const classData = {
    day,
    sTime,
    eTime,
    grade,
    subject,
    teacher,
    hallNo,
    wLink 
  }
  
  const updateShow = () => {
    console.log(props.tsid)
    settScheduleID(props.tsid)
    axios.get("http://localhost:5000/api/classes/" + props.tsid).then(function (response) {
        setDay(response.data['day']);
        setsTime(response.data['sTime']);
        seteTime(response.data['eTime']);
        setGrade(response.data['grade']);
        setSubject(response.data['subject']);
        setTeacher(response.data['teacher']);
        setHallNo(response.data['hallNo']);
        setwLink(response.data['wLink']);
        setShow(true)

    }).catch(function (error) {
        console.log(error);
        alert('invalid')
    });
};

function submitForm(e) {
    e.preventDefault();
    // console.log(classData);
    axios.put('http://localhost:5000/api/classes/updatecls/' + props.tsid, classData)
        .then(function (response) {
            // console.log(response);
            setDay('');
            setsTime('');
            seteTime('');
            setGrade('');
            setSubject('');
            setTeacher('');
            setHallNo('');
            setwLink('');
            setShow(false);
            swal({ text: "Class Successfully Updated", icon: "success", button: "Okay!" }).then((value) => {
              window.location = '';
            });
        })
        .catch(function (error) {
            console.log(error);
        });
}
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <Button variant='success' class="btn btn-success mr-2" onClick={updateShow}>
        Update
      </Button>

      <Modal show={show}
        size="lg"
        centered
      >
        <Modal.Header>

          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>

        </Modal.Header>
        <Modal.Body>

          <div>
            <h1>Update a schedule</h1> <br />
            <form>

            <div class="mb-3">
                <label for="day" class="form-label">Day of Week</label>
                <select class="form-select" aria-label="Default select example" onChange={(e) => { setDay(e.target.value) }}>
                <option selected>{day}</option>
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
              <input type="time" id="inputTime" className="form-control" placeholder="08.30-10.30" value = {sTime} onChange={(e) => { setsTime(e.target.value) }} />
            </div>
            <div className="mb-3">
              <label for="time" className="form-label">To</label>
              <input type="time" id="inputTime" className="form-control" placeholder="08.30-10.30" value = {eTime} onChange={(e) => { seteTime(e.target.value) }}/>
            </div>

              <div class="mb-3">
                <label for="grade" class="form-label">Grade</label>
                <select class="form-select" aria-label="Default select example" onChange={(e) => { setGrade(e.target.value) }}>
                <option selected>{grade}</option>
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

              <div class="mb-3">
                <label for="subject" class="form-label">Subject</label>
                <select class="form-select" aria-label="Default select example" onChange={(e) => { setSubject(e.target.value) }}>
                <option selected>{subject}</option>  
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

              <div class="mb-3">
                <label for="disabledTextInput" class="form-label">Teacher Name</label>
                <select class="form-select" aria-label="Default select example" onChange={(e) => { setTeacher(e.target.value) }}>
                <option selected>{teacher}</option> 
                  <option value="Mr. Anuradha">Mr. Anuradha</option>
                  <option value="Mr. Amal">Mr. Amal</option>
                  <option value="Mrs. Hansi">Mrs. Hansi</option>
                </select>
              </div>

              <div class="mb-3">
                <label for="hallNo" class="form-label">Hall No.</label>
                <select class="form-select" aria-label="Default select example" onChange={(e) => { setHallNo(e.target.value) }} >
                <option selected>{hallNo}</option> 
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

              <div class="mb-3">
                <label for="webinarLink" class="form-label">Webinar Link</label>
                <input type="text" id="inputLink" class="form-control" placeholder="www.zoom.us"  value = {wLink} onChange={(e) => { setwLink(e.target.value) }}/>
              </div>

            </form>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={submitForm}>
            Update schedule
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Exit
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}