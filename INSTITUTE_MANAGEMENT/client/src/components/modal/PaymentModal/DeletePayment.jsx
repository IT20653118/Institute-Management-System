import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";

import '../../../style.css'


export default function DeletePayment(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className='btn-dashb me-5' onClick={handleShow}>
        Delete Salary Payment
      </Button>

      <Modal show={show}        
        size="lg"
        centered
      >
        <Modal.Header>
      
          <Modal.Title id="contained-modal-title-vcenter">Delete Salary Payment</Modal.Title>
           
        </Modal.Header>
        <Modal.Body>


        <Form>

<fieldset>
<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
<Col sm={2}>
  <Form.Label>
  Salary ID:
  </Form.Label>
</Col>
<Col sm={10}>
  <Form.Control type="text"/>
</Col>

</Form.Group>
</fieldset>

<fieldset>
<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
<Col sm={2}>
  <Form.Label>
  Subject
  </Form.Label>
</Col>
<Col sm={10}>
<select className="Col-3" aria-label="Default select example" style={{height:"35px", width:"40%"}}>
  <option selected>Select Staff ID</option>
  <option value="1"></option>
  <option value="2"></option>
  <option value="3"></option>
</select>
</Col>

</Form.Group>
</fieldset>

<fieldset>
<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
<Col sm={2}>
  <Form.Label>
  Staff Members Name:
  </Form.Label>
</Col>
<Col sm={10}>
  <Form.Control type="text"/>
</Col>

</Form.Group>
</fieldset>

<Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
<Form.Label column sm="2">
Month
</Form.Label>
<Col sm="5">
  <Form.Control type="date"/>
</Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
<Form.Label column sm="2">
Amount
</Form.Label>
<Col sm="5">
  <Form.Control type="text" />
</Col>
</Form.Group>
</Form>

  </Modal.Body>
    <Modal.Footer>
    <Button variant="secondary" onClick={handleShow}>
        Delete Payment
      </Button>
      <Button variant="secondary" onClick={handleClose}>
        Cancel
      </Button>
     
    </Modal.Footer>
  </Modal>
</>
);
}