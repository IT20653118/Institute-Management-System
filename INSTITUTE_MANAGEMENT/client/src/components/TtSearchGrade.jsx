import React from "react";
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Col, Row, Form } from "react-bootstrap";
import { useState, useEffect } from 'react';
import TtSearchGradeModal from "./modal/timetablemodal/TtSearchGradeModal";

const TtSearchGrade = () => {

  const [show, setShow] = useState(false);
  const [classes, setClasses] = useState(false);
  const handleClose = () => setShow(false);

  function searchId(e) {
    if (e.keyCode == 13) {
      setShow(true);
    }
  }
  return (
    <div>
    <div class="row">
      <div class="col-sm-10"></div>
      <div class="col-sm-5"></div>
      <MDBCol md="4">

        <MDBIcon icon="search" />
        <input className="form-control form-control-sm ml-3 w-75 float-right" type="text" placeholder="Grade..." aria-label="Search" onChange={(e) => { setClasses(e.target.value) }} onKeyDown={(e) => searchId(e)} />

      </MDBCol>
    </div>
    <Modal show={show}
      size="lg"
      centered
    >
      <TtSearchGradeModal classes={classes} />
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Exit
        </Button>
      </Modal.Footer>
    </Modal>

  </div>

  );
}

export default TtSearchGrade;