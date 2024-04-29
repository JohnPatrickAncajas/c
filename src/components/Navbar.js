import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link, Outlet } from 'react-router-dom'; // Import Link from React Router

function MyNavbar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/c">C Lesson Guide</Navbar.Brand> {/* Use Link component */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto flex-grow-1">
            {/* Add any additional navigation items */}
          </Nav>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/c">Home</Nav.Link> {/* Use Link component */}
            <Nav.Link as={Link} to="/c/About">About</Nav.Link> {/* Use Link component */}
            <Nav.Link as={Link} to="/c/Contact">Contact</Nav.Link> {/* Use Link component */}
          </Nav>
        </Navbar.Collapse>
      </Container>
      {/* Render the outlet (child routes) */}
      <Outlet />
    </Navbar>
  );
}

export default MyNavbar;
