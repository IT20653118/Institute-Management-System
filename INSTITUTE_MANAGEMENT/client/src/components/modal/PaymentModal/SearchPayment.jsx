import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import '../../../style.css'
import ViewPayment from './ViewPayment';


export default function SearchPayment(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      
      <Button className='btn-dashb me-5' variant='primary' onClick={handleShow}>
        Search Salary Payment
      </Button>


      <Modal show={show}        
        size="lg"
        centered
      >
        <Modal.Header>
        <div class="col-md-12 text-center">
          <Modal.Title id="contained-modal-title-vcenter">Search Salary Payment</Modal.Title>
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
      <ViewPayment/>
      <Button variant="secondary" onClick={handleClose}>
        Cancel
      </Button>
     
    </Modal.Footer>
  </Modal>
</>
);
}