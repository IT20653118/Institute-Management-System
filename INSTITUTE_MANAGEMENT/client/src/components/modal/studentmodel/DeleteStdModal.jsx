import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import { MDBCol } from 'mdb-react-ui-kit';
import axios from 'axios';
import "../../../style.css"

export default function DeleteStdModel(props) {
  const [show, setShow] = useState(false);

  const [student_id , getStudent_id] = useState("");

  const studentData ={
    student_id
  }

  function submitForm(e){
    e.preventDefault();
    console.log(studentData);
    axios.delete('http://localhost:5000/api/StudentAuth/deletestd', studentData)
    .then(function (response) {
      console.log(response);
      getStudent_id('');
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" type="submit" onClick={handleShow}>
        Delete Student
      </Button>

      <Modal show={show}        
        size="lg"
        centered
      >
        <Modal.Header>
          <div class="col-md-12 text-center">
          <Modal.Title id="contained-modal-title-vcenter">Delete Student</Modal.Title>
          </div>
          
        </Modal.Header>
        <Form onSubmit={submitForm}></Form>
        <Modal.Body>

    <fieldset>
      <Form.Group as={Col} className="p-2 bd-highlight">

        <Col sm={7}>
        <MDBCol lg='4' md='12' className='mb-4'>
          <img src='https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824144_960_720.png' className='img-fluid rounded' alt='' />
        </MDBCol>
        </Col>
        
      </Form.Group>
    </fieldset>

    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
      Student Id  
      </Form.Label>
      <Col sm="7">
        <Form.Control type="text" placeholder="Enter your Student Id " onChange={(e)=>{getStudent_id(e.target.value)}} />
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
      Full Name  
      </Form.Label>
      <Col sm="7">
        <Form.Control type="text" placeholder="Enter your Full Name " disabled/>
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
      <Form.Label column sm="2">
      Age
      </Form.Label>
      <Col sm="5">
        <Form.Control type="date" placeholder="Enter your age" disabled/>
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
        <Form.Control type="date" placeholder="Enter your Exam Year " disabled/>
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
        <Form.Control type="text" placeholder="Enter your School" disabled/>
      </Col>
    </Form.Group>


    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
      Email Address 
      </Form.Label>
      <Col sm="7">
        <Form.Control type="Email" placeholder="Enter your  Email Address" disabled/>
      </Col>
    </Form.Group>


    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
      Address 
      </Form.Label>
      <Col sm="7">
        <Form.Control type="textarea" placeholder="Enter your Address" disabled/>
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
      <Form.Label column sm="2">
      Phone Number
      </Form.Label>
      <Col sm="7">
        <Form.Control type="tel" placeholder="Enter your Phone Number" maxLength="10" disabled/>
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
      Grade 
      </Form.Label>
      <Col sm="7">
        <Form.Control type="text" placeholder="Enter your Grade" disabled/>
      </Col>
    </Form.Group>

      </Modal.Body>
        <Modal.Footer>
        <Button class="btn btn-primary" variant="primary" type="submit" onClick={handleClose}>
            Delete Student
          </Button>
          <Button class="btn btn-danger" variant="danger" onClick={handleClose}>
            Cancel
          </Button>      
        </Modal.Footer>
    </Modal>

    </>
  );
}