import React, { useRef } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form,} from "react-bootstrap";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useReactToPrint } from 'react-to-print';

export default function GenDailyReportModal(props) {
    const [classes, setClasses] = useState([])

    const componentRef=useRef();
    const handlePrint= useReactToPrint({
      content:()=>componentRef.current,
    });

    useEffect(() => {
            axios.get("http://localhost:5000/api/classes/dycs/" + props.classes).then(response => {
                setClasses(response.data);
                console.log(response.data);

            })
            .catch(err => {
                console.log(err);
            })
    })
    return (
        <>
            <Modal.Header>
                <div class="col-md-12 text-center">
                    <Modal.Title id="contained-modal-title-vcenter">Report</Modal.Title>
                </div>
            </Modal.Header>
            <Modal.Body>

                <Form>
                     
            <fieldset>
            
            <div ref={componentRef}>
                <div className="row">
                </div>        
                <center><h2>Report of classes scheduled in a specific day</h2></center> <br/>
                <table className="table table-striped styled-table ">
                    <thead className="thead-dark" >
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
                </table> <br/>
            </div>
            </fieldset>
            <div className="d-flex justify-content-center">
                <Button variant="success" onClick={handlePrint}>
                    Print Daily Report
                </Button>
            </div>
       
            </Form>

            </Modal.Body>
            
        </>
    );
}