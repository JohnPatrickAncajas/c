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
              <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
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
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Lesson 1 - Basic Computer Concepts</Accordion.Header>
              <Accordion.Body>
                <Nav.Link as={Link} to="/Lessons/Lesson1/Topic1">Topic 1 - Computers</Nav.Link>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MyNavbar;
