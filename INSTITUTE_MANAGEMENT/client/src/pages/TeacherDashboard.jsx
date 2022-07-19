import React from 'react'
import TeacherSideNav from "../components/TeacherSideNav";
import "../style.css"
import { Link } from "react-router-dom"
import Header from '../components/Header'

export default function TeacherDashboard() {
  return (
    <div>
      <Header/>
      <br/><br/><br/>
      <div className="container-fluid">
              <div className="row">
                  <div className="col-md-3">
                      {/* <h1 className="fredoka"> Hello John ! </h1> */}
                  </div>
                  <div className="col-md-7">
                      <br />
                      <h1 className="fredoka"> Hello Teacher ! </h1>
                  </div>

              </div>
        </div>
      <div class="row text-center inline">
        <div class="col-md-2"></div>
        <div class="col-md-10 d-flex justify-content-center">

        <div class="container-fluid ">
                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-2">
                        <div>
                            <div class="dbox__body">
                                <span class="dbox__count"></span>
                                <span class="dbox__title">
                                  <Link to="/addT" type = "button" className="btn btn-dashb me-5 d-flex align-items-center justify-content-center">
                                    Schedule a class
                                  </Link></span>
                            </div>

                            <div class="dbox__action">
                               
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div >
                            <div class="dbox__body">
                                <span class="dbox__count"></span>
                                <span class="dbox__title">
                                  <Link to="/ttT" className="btn btn-dashb me-5 d-flex align-items-center justify-content-center">
                                    View Timetable
                                  </Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>    
    </div>
  )
}
