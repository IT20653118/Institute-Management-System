import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import StudentAdmin from "./pages/admin/StudentAdmin";
import AllStudents from "./pages/AllStudents";
import Login from "./pages/Login";
import StudentProfile from "./pages/StudentProfile";
import React from 'react'
import Homepage from "./pages/Homepage";
import SalaryPayment from "./pages/admin/SalaryPayment";
import TimetableAdmin from "./pages/admin/TimetableAdmin";
import AdminAddClass from "./pages/admin/AdminAddClass";
import TeacherDashboard from "./pages/TeacherDashboard";
import TeacherAddClass from "./pages/TeacherAddClass";
import AdminViewTt from "./pages/admin/AdminViewTt";
import TeacherViewTt from "./pages/TeacherViewTt";
import StudentViewTt from "./pages/StudentViewTt";

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Dashboard/>} /> 
        <Route path="/student" element={<StudentAdmin/>} />
        <Route path="/allstudent" element={<AllStudents/>} />
        <Route path="/home" element={<Homepage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/stdprofile" element={<StudentProfile/>} />
        <Route path="/payment" element={<SalaryPayment />} />
        <Route path = "/timetable" exact element = {<TimetableAdmin/>}/>
        <Route path = "/addA" exact element = {<AdminAddClass/>} />
        <Route path = "/ttA" exact element = {<AdminViewTt/>} />
        <Route path = "/teacher" exact element = {<TeacherDashboard/>}/>
        <Route path = "/addT" exact element = {<TeacherAddClass/>} />
        <Route path = "/ttT" exact element = {<TeacherViewTt/>} />
        <Route path = "/ttS" exact element = {<StudentViewTt/>} />
        
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
