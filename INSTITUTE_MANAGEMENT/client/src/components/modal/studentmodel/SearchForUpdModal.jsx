import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import '../../../style.css'
import DeleteStdModel from './DeleteStdModal';
import UpdateStdModel from './UpdateStdModal';

export default function SearchForUpdModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>

        <Button className='btn-dashb me-5' onClick={handleShow}>
            Update Student
        </Button>


        <Modal show={show}        
            size="lg"
            centered
        >
            <Modal.Header>
            <div class="col-md-12 text-center">
            <Modal.Title id="contained-modal-title-vcenter">Search Student Id</Modal.Title>
            </div>
            </Modal.Header>
            <Modal.Body>


    
            <Form>

    <fieldset>
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Col sm={20}>
    <div class="col-md-12 text-center">
    <Form.Label>
    Staff Member ID:
    </Form.Label>
    </div>
    </Col>
    <Col  sm={10}>
    <Form.Control  type="text" ></Form.Control> 
    </Col>
    </Form.Group>
    </fieldset>
    </Form>

    </Modal.Body>
        <Modal.Footer>

        <UpdateStdModel/>
        <Button variant="danger" onClick={handleClose}>
            Cancel
        </Button>
        
        </Modal.Footer>
    </Modal>
    </>
  )
}
