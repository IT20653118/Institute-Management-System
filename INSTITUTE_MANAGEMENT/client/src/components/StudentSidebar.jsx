import React from 'react'
import "../style.css"

export default function StudentSidebar() {
  return (
    <div>
            <nav class="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-dark bg-dark navbar-expand-lg" id="navbar">

                <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse row m-auto ml-sm-5 " id="navbarNav">
                    <div class="navbar-nav col-md-10">

                        <a href="#" class="nav-item dash-link nav-link "> Personal <span class="sr-only">(current)</span> </a>
                        <a href="#" class="nav-item nav-link dash-link "> Exam Results </a>
                        <a href="#" class="nav-item nav-link dash-link"> Attendence </a>
                        <a href="#" class="nav-item nav-link dash-link"> Fees Payment </a>
                        <a href="#" class="nav-item nav-link dash-link"> Feedback </a>
                        <a href="ttS" class="nav-item nav-link dash-link"> View Timetable </a>
                    </div> 
                </div>
            </nav>
        </div>
  )
}
