import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Col, Row, Form } from "react-bootstrap";
import { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

export default function TtSearchDayModal(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [classes, setClasses] = useState([]); 
    
    useEffect(() => {
        axios.get("http://localhost:5000/api/classes/dycs/" + props.classes).then(response => {
            console.log(response.data);
            if (response.data.length != 0) {
                setClasses(response.data);
            }
            else{
                swal({ text: "No classes for this day", button: "Okay!"}).then((value) => {
                    window.location = ''; 
                 });
            }
        })
        .catch(err => {
            console.log(err);
        })

    })

  return (
    <>
    <Modal.Header>
        <div class="col-md-12 text-center">
            <Modal.Title id="contained-modal-title-vcenter">Search Scheduled Class</Modal.Title>
        </div>
    </Modal.Header>
    <Modal.Body>

        <Form>
            <fieldset>
                <div>
                    {/* <input placeholder="Search" /> */}
                    <center><h2>Search details</h2></center><br/>
                    <table className="table">
                        <thead className="thead-dark">
                                <tr>
                                <th scope="col">Day</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Grade</th>
                                    <th scope="col">Subject</th>
                                    <th scope="col">Teacher</th>
                                    <th scope="col">Hall No.</th>
                                    <th scope="col">Webinar Links</th>
                                </tr>     
                        </thead>
                        <tbody>
                        { classes.map(cs =>
                        <tr key={cs.tScheduleID}>
                            <th scope="row">{cs.day}</th>
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
            </fieldset>
        </Form>

    </Modal.Body>

    </>
  )
}
