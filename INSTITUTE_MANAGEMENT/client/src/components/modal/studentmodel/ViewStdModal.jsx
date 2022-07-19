import React, { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import { MDBCol } from 'mdb-react-ui-kit';
import "../../../style.css"
import axios from 'axios';

export default function ViewStdModel(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='btn-dashb me-5' onClick={handleShow}>
        View Student
      </Button>

      <Modal show={show}        
        size="lg"
        centered
      >
        <Modal.Header>
        <div class="col-md-12 text-center">
          <Modal.Title id="contained-modal-title-vcenter">Student Details</Modal.Title>
        </div>  
        </Modal.Header>
        <Modal.Body>


  <Form>
    <fieldset>
      <Form.Group as={Col} className="p-2 bd-highlight">
        <Col>
          <Form.Label as="legend" column sm={2}>
          Student_Image
          </Form.Label>
        </Col>

        <Col sm={7}>
        <MDBCol lg='4' md='12' className='mb-4'>
          <img src='https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824144_960_720.png' className='img-fluid rounded' alt='' />
        </MDBCol>
        </Col>
        <Col>
          <Button variant="warning" onClick={handleClose}>
              Add Image
          </Button>
        </Col>
      </Form.Group>
    </fieldset>

    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
      Full Name  
      </Form.Label>
      <Col sm="7">
        <Form.Control type="text" placeholder="Enter your Full Name " />
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
      <Form.Label column sm="2">
      Age
      </Form.Label>
      <Col sm="5">
        <Form.Control type="date" placeholder="Enter your age" />
      </Col>
    </Form.Group>

    <Form>
    {['radio'].map((type) => (
      <div key={`inline-${type}`} className="mb-3">
        <Form.Label as="legend" column sm={2}>
        Gender
        </Form.Label>
        <Form.Check
          inline
          label="Male"
          name="group1"
          type={type}
          id={`inline-${type}-1`}
        />
        <Form.Check
          inline
          label="Female"
          name="group1"
          type={type}
          id={`inline-${type}-2`}
        />
      </div>
    ))}
  </Form>

    
    <fieldset>
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
      Exam Year
      </Form.Label>
      <Col sm="5">
        <Form.Control type="date" placeholder="Enter your Exam Year " />
      </Col>

      <Col>
      {['radio'].map((type) => (
      <div key={`inline-${type}`} className="mb-3">
        <Form.Label as="legend" column sm={1}>
        </Form.Label>
        <Form.Check
          inline
          label="O/L"
          name="group1"
          type={type}
          id={`inline-${type}-1`}
        />
        <Form.Check
          inline
          label="A/L"
          name="group1"
          type={type}
          id={`inline-${type}-2`}
        />
      </div>
    ))}
        </Col>
      
      </Form.Group>
    </fieldset>


    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
      <Form.Label column sm="2">
      School
      </Form.Label>
      <Col sm="7">
        <Form.Control type="text" placeholder="Enter your School" />
      </Col>
    </Form.Group>


    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
      Email Address 
      </Form.Label>
      <Col sm="7">
        <Form.Control type="Email" placeholder="Enter your  Email Address" />
      </Col>
    </Form.Group>


    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
      Address 
      </Form.Label>
      <Col sm="7">
        <Form.Control type="textarea" placeholder="Enter your Address" />
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
      <Form.Label column sm="2">
      Phone Number
      </Form.Label>
      <Col sm="7">
        <Form.Control type="tel" placeholder="Enter your Phone Number" maxLength="10"/>
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
      Grade 
      </Form.Label>
      <Col sm="7">
        <Form.Control type="text" placeholder="Enter your Grade" />
      </Col>
    </Form.Group>
 
</Form>

      </Modal.Body>
      <Modal.Footer>
      <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          </Modal.Footer>
      </Modal>
    </>
  );
}