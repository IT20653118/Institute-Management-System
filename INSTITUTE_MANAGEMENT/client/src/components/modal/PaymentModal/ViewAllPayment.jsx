import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {Form } from "react-bootstrap";
import '../../../style.css'
import axios from 'axios';






 export default function ViewAllPayment() {
    const [payments, setPayment] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios.get('http://localhost:5000/api/payments/').then(res=> {
          setPayment(res.data);

        })
            .catch(err => {
                console.log(err);
            })

      
  
       

         
    
    
    })
      
        return (
          <>
             <Button className='btn-dashbc me-5' onClick={handleShow}>
        View All Salary Payment
      </Button>
      
            <Modal show={show}        
              size="xl"
              centered
            >
              <Modal.Header>
            
                <Modal.Title id="contained-modal-title-vcenter">View Salary Payment</Modal.Title>
                 
              </Modal.Header>
              <Modal.Body>
      
      
       
              <Form>
      
      <fieldset>
            
      <div className="">



<center><h2>Payment History</h2></center>


<table class="table table-striped styled-table ">
    <thead class="thead-dark" >
        <tr>
           
            <th scope="col">Payment ID</th>
            <th scope="col">Employee ID</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Employee Type</th>
            <th scope="col">Name</th>
            <th scope="col">Month</th>
            <th scope="col">Salary</th>
            <th scope="col">Actions</th>
    
        </tr>
    </thead>
    <tbody>
  

        {
            payments.map(payments => <tr key={payments.paymentid}>
          

                <td>{payments.paymentid}</td>
                <td>{payments.name}</td>
                <td>{payments.employee_ID}</td>
                <td>{payments.employee_type}</td>
                <td>{payments.name}</td>
                <td>{payments.month}</td>
                <td>{payments.salary}</td>
                <td> <button type="button"   class="btn btn-success me-2">Delete</button>
                <button type="button"   class="btn btn-warning me-2">Update</button></td>
         
               

            </tr>
            
            )
            
        }

    </tbody>
</table>

</div>

      </fieldset>
      </Form>
      
        </Modal.Body>
          <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
        Done
      </Button>
      <Button variant="danger" onClick={handleClose}>
        Cancel
      </Button>
           
          </Modal.Footer>
        </Modal>
      </>
      );  
}

