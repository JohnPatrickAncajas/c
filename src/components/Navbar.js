import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';

function MyNavbar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">C Lesson Guide</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto flex-grow-1">
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="/" to="/">Home</Nav.Link>
            <Nav.Link href="/About" to="/About">About</Nav.Link>
            <Nav.Link href="/contact" to="">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Outlet />
    </Navbar>
  );
}

export default MyNavbar;
