import React from 'react'
import "../style.css"
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap'
import logo from "../images/logo.png"

export default function Header() {
    return (
        <div>
            <Navbar variant="dark" bg="dark" expand="lg" className='navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light fixed-top'>
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbar-dark-example" />
                    <a className="brand" href="/">
                        <img src={logo} style={{ width: '150px' }} alt="image" />
                    </a>
                    <ul className="navbar-nav m-auto">
                        <Navbar.Collapse id="navbar-dark-example">
                            <li className="nav-item active"><a href="/" className="nav-link">Home</a></li>
                        </Navbar.Collapse>
                        <Navbar.Collapse id="navbar-dark-example">
                            <Nav>
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Support Services"
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Collapse id="navbar-dark-example">
                            <Nav>
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Resources"
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item href="/stexam">Exam Schedules</NavDropdown.Item>
                                    <NavDropdown.Item href="/ttS">View timetable(Student)</NavDropdown.Item>
                                    <NavDropdown.Item href="/teacher">Staff(Manage timetable)</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Collapse id="navbar-dark-example">
                            <li className="nav-item"><a href="/contactus" className="nav-link">Contact Us</a></li>
                        </Navbar.Collapse>
                    </ul>
                    <a href="/log" className="btn btn-def">Login</a>
                </Container>
            </Navbar>
        </div>
    )
}



