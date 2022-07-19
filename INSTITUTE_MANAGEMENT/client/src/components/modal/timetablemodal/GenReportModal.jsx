import React, { useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import '../../../style.css'
import {useReactToPrint} from "react-to-print";
import axios from "axios";
import { useEffect } from 'react';
import TtReportSearchDay from '../../TtReportSearchDay';

export default function GenReportModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [classes, setClasses] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/classes/").then(res => {
        setClasses(res.data);
    })
    .catch(err => {
        console.log(err);
    })
  })

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () =>componentRef.current,
  });
  return (
    <>
    <Button className='btn-dashbc me-5' onClick={handleShow}>
        Genarate Reports
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
          <TtReportSearchDay/>
        </div>
       <br/>
      <div ref = {componentRef}>
      <table className="table">
            <thead>
              <tr>
              <th scope="col">ID</th>
              <th scope="col">Day</th>
                <th scope="col">Time</th>
                <th scope="col">Grade</th>
                <th scope="col">Subject</th>
                <th scope="col">Teacher</th>
                <th scope="col">Hall No.</th>
                <th scope="col">Webinar Links</th>
              </tr>
            </thead>
            <tbody> { classes.map(cs =>
              <tr key={cs.tScheduleID}>
                <th scope="row">{cs.tScheduleID}</th>
                <td>{cs.day}</td>
                <td>{cs.sTime} {cs.eTime}</td>
                <td>{cs.grade}</td>
                <td>{cs.subject}</td>
                <td>{cs.teacher}</td>
                <td>{cs.hallNo}</td>
                <td>{cs.wLink}</td>
              </tr>)
              }
            </tbody>
          </table>
          </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="success" onClick={handlePrint}>
         Print Report
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Exit
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);
}