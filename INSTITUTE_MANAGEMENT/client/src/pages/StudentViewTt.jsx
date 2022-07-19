import React from 'react'
import Header from '../components/Header'
import SelectDay from '../components/SelectDay'
import SelectGrade from '../components/SelectGrade'
import "../style.css"
import axios from "axios";
import {useState} from "react";
import { useEffect } from 'react';
import TimetableSearch from '../components/TtSearchGrade'
import TtSearchGrade from '../components/TtSearchGrade'
import TtSearchDay from '../components/TtSearchDay'

export default function StudentViewTt() {

  const [classes, setClasses] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/classes/").then(res => {
        setClasses(res.data);
    })
    .catch(err => {
        console.log(err);
    })

  })

  return (
    <div>
      <Header/>
      <br />
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-2">

          <SelectGrade />
        </div>

        <div className="col-sm-7">
          <SelectDay /> <br/>
        <div className="row">
          <div className="col-sm-6"><TtSearchGrade /> </div>
          <div className="col-sm-6"><TtSearchDay /> </div>    
        </div>

          <br/><br/>
          <table className="table">
            <thead>
              <tr>
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
                <th scope="row">{cs.day}</th>
                <td>{cs.sTime} {cs.eTime}</td>
                <td>{cs.grade}</td>
                <td>{cs.subject}</td>
                <td>{cs.teacher}</td>
                <td>{cs.hallNo}</td>
                <td>{cs.wLink}</td>
              </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
