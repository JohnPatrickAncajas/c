import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Navbar, Nav, Container, Offcanvas, Accordion } from 'react-bootstrap';

function MyNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">C Lesson Guide</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto flex-grow-1">
            </Nav>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/Lessons">Lessons</Nav.Link>
              <Nav.Link onClick={handleShow}>Menu</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Outlet />
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h6>Lesson 1 - Basic Computer Concepts</h6></Accordion.Header>
                    <Accordion.Body>
                    <ul>
                        <li><Link to="/Lessons/Lesson1/Topic1">Topic 1 - Computers</Link></li>
                        <li><Link to="/Lessons/Lesson1/Topic2">Topic 2 - Parts Of A Computer System</Link></li>
                        <li><Link to="/Lessons/Lesson1/Topic3">Topic 3 - Computer Hardware</Link></li>
                        <li><Link to="/Lessons/Lesson1/Topic4">Topic 4 - Computer Software</Link></li>
                        <li><Link to="/Lessons/Lesson1/Topic5">Topic 5 - Data and Information</Link></li>
                    </ul>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header><h6>Lesson 2 - Algorithms and Pseudocodes</h6></Accordion.Header>
                    <Accordion.Body>
                    <ul>
                        <li><Link to="/Lessons/Lesson2/Topic1">Topic 1 - Program Logic Formulation</Link></li>
                        <li><Link to="/Lessons/Lesson2/Topic2">Topic 2 - Algorithms</Link></li>
                        <li><Link to="/Lessons/Lesson2/Topic3">Topic 3 - Pseudocodes</Link></li>
                        <li><Link to="/Lessons/Lesson2/Topic4">Topic 4 - Symbols And Operators</Link></li>
                    </ul>
                    </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="3">
                    <Accordion.Header><h6>Lesson 3 - C Programming Language</h6></Accordion.Header>
                    <Accordion.Body>
                    <ul>
                        <li><Link to="/Lessons/Lesson3/Topic1">Topic 1 - Introduction To C</Link></li>
                        <li><Link to="/Lessons/Lesson3/Topic2">Topic 2 - C Programming Basics</Link></li>
                    </ul>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header><h6>Lesson 4 - Fundamentals Of C Programming</h6></Accordion.Header>
                    <Accordion.Body>

                    <ul>
                        <li><Link to="/Lessons/Lesson4/Topic1">Topic 1 - Basic Escape Sequences</Link></li>
                        <li><Link to="/Lessons/Lesson4/Topic2">Topic 2 - Placeholders</Link></li>
                        <li><Link to="/Lessons/Lesson4/Topic3">Topic 3 - Input Operations</Link></li>
                    </ul>
                    </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="5">
                    <Accordion.Header><h6>Lesson 5 - C Programming Language Operators</h6></Accordion.Header>
                    <Accordion.Body>
                    <ul>
                        <li><Link to="/Lessons/Lesson5/Topic1">Topic 1 - Operators</Link></li>
                        <li><Link to="/Lessons/Lesson5/Topic2">Topic 2 - Arithmetic Operators</Link></li>
                        <li><Link to="/Lessons/Lesson5/Topic3">Topic 3 - Assignment Operators</Link></li>
                        <li><Link to="/Lessons/Lesson5/Topic4">Topic 4 - Relational Operators</Link></li>
                        <li><Link to="/Lessons/Lesson5/Topic5">Topic 5 - Logical Operators</Link></li>
                        <li><Link to="/Lessons/Lesson5/Topic6">Topic 6 - Increment/Decrement Operators</Link></li>
                    </ul>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                    <Accordion.Header><h6>Lesson 6 - C Programming Control Structures</h6></Accordion.Header>
                    <Accordion.Body>
                    <ul>
                        <li><Link to="/Lessons/Lesson6/Topic1">Topic 1 - Statements</Link></li>
                        <li><Link to="/Lessons/Lesson6/Topic2">Topic 2 - Control Structures</Link></li>
                        <li><Link to="/Lessons/Lesson6/Topic3">Topic 3 - If Structure</Link></li>
                        <li><Link to="/Lessons/Lesson6/Topic4">Topic 4 - If-Else Structure</Link></li>
                        <li><Link to="/Lessons/Lesson6/Topic5">Topic 5 - If-Else If Structure</Link></li>
                        <li><Link to="/Lessons/Lesson6/Topic6">Topic 6 - Nested If Structure</Link></li>
                        <li><Link to="/Lessons/Lesson6/Topic7">Topic 7 - Switch Case Structure</Link></li>
                    </ul>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7">
                    <Accordion.Header><h6>Lesson 7 - To be added</h6></Accordion.Header>
                    <Accordion.Body>
                    <ul>
                        <li><Link to="/Lessons/Lesson7/Topic1">Topic 1 - To be added</Link></li>
                        <li><Link to="/Lessons/Lesson7/Topic2">Topic 2 - To be added</Link></li>
                    </ul>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="8">
                    <Accordion.Header><h6>Lesson 8 - To be added</h6></Accordion.Header>
                    <Accordion.Body>
                    <ul>
                        <li><Link to="/Lessons/Lesson8/Topic1">Topic 1 - To be added</Link></li>
                        <li><Link to="/Lessons/Lesson8/Topic2">Topic 2 - To be added</Link></li>
                    </ul>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="9">
                    <Accordion.Header><h6>Lesson 9 - To be added</h6></Accordion.Header>
                    <Accordion.Body>
                    <ul>
                        <li><Link to="/Lessons/Lesson9/Topic1">Topic 1 - To be added</Link></li>
                        <li><Link to="/Lessons/Lesson9/Topic2">Topic 2 - To be added</Link></li>
                    </ul>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MyNavbar;
