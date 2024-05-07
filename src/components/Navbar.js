import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Navbar, Nav, Container, Offcanvas} from 'react-bootstrap';

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

      <Offcanvas show={show} onHide={handleClose} placement="end" className="bg-dark text-white">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav.Link as={Link} to="/topic1">Topic 1 - Computers</Nav.Link>
          <Nav.Link as={Link} to="/topic2">Topic 2 - something long</Nav.Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MyNavbar;
