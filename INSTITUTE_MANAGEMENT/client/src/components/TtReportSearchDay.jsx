import React, { useRef } from "react";
import Modal from 'react-bootstrap/Modal';
import { MDBCol, MDBIcon } from "mdbreact";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import SearchG from "./modal/timetablemodal/GenDailyReportModal";

const TtReportSearchDay = (props) => {

  const [show, setShow] = useState(false);
  const [classes, setClasses] = useState([])
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
          <input className="" type="text" placeholder="         Enter a Day " aria-label="Search" onChange={(e) => { setClasses(e.target.value) }} onKeyDown={(e) => searchId(e)} />

        </MDBCol>
      </div>
      <Modal show={show}
        size="lg"
        centered
      >
   
      <SearchG classes={classes}/>
      <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Exit
      </Button>
      </Modal.Footer>
      </Modal>

    </div>

  );
}

export default TtReportSearchDay;