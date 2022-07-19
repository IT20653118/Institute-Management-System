import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from "axios";
import swal from 'sweetalert';

export default function CancelModal(props) {

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

  const deleteShow = () => {
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
    axios.delete(`http://localhost:5000/api/classes/deletecls/` + props.tsid)
      .then(function (response) {
          setShow(false);
          swal({ text: "Class Successfully Deleted", icon: "success", button: "Okay!" }).then((value) => {
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
    <Button variant='danger' class="btn btn-danger" onClick={deleteShow}>
        Cancel
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
        <h1>Cancel a schedule</h1> <br/>
      <form>

      <div class="mb-3">
          <label for="day" class="form-label">Day of Week</label> 
            <input type="text" id="deleteDay" value={day} class="form-control" readOnly/>
        </div>

        <div class="mb-3">
          <label for="time" class="form-label">From</label>
          <input type="text" id="deletesTime" value={sTime} class="form-control" readOnly/>
        </div>

        <div class="mb-3">
          <label for="time" class="form-label">To</label>
          <input type="text" id="deleteeTime" value={eTime} class="form-control" readOnly/>
        </div>

        <div class="mb-3">
          <label for="grade" class="form-label">Grade</label>
            <input type="text" id="deleteGrade" value={grade} class="form-control" readOnly/>
        </div>

        <div class="mb-3">
          <label for="subject" class="form-label">Subject</label>
            <input type="text" id="deleteSubject" value={subject} class="form-control" readOnly/>
        </div>

        <div class="mb-3">
          <label for="teacherName" class="form-label">Teacher Name</label>
            <input type="text" id="deleteTeacher" value={teacher} class="form-control" readOnly/>
        </div>

        <div class="mb-3">
          <label for="hallNo" class="form-label">Hall No.</label>
            <input type="text" id="deletehallNo" value={hallNo} class="form-control" readOnly/>
        </div>

        <div class="mb-3">
          <label for="webinarLink" class="form-label">Webinar Link</label>
            <input type="text" id="deletewLink" value={wLink} class="form-control" readOnly/>
        </div>

      </form>
    </div>

      </Modal.Body>
        <Modal.Footer>
        <Button variant="success" onClick={submitForm}>
            Cancel schedule
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Exit
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}