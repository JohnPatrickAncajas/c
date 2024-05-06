import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNavbar() {
  return (
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
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Menu"
              drop= "down-start"
              menuVariant="dark"
            >
              <NavDropdown.ItemText style={{ minWidth: 'calc(100vw - 25.6px)' }}>Lesson 1 - Basic Computer Concepts</NavDropdown.ItemText>
              <NavDropdown.Item href="#action/3.2" >Topic 1 - Computers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Topic 2 - something long</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Topic 3 - something long</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Topic 4 - something long</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.ItemText>Lesson 1 - Basic Computer Concepts</NavDropdown.ItemText>
              <NavDropdown.Item href="#action/3.2" >Topic 1 - Computers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Topic 2 - something long</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Topic 3 - something long</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Topic 4 - something long</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.ItemText>Lesson 1 - Basic Computer Concepts</NavDropdown.ItemText>
              <NavDropdown.Item href="#action/3.2" >Topic 1 - Computers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Topic 2 - something long</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Topic 3 - something long</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Topic 4 - something long</NavDropdown.Item>
              <NavDropdown.Divider />
              
              <NavDropdown.ItemText>Lesson 1 - Basic Computer Concepts</NavDropdown.ItemText>
              <NavDropdown.Item href="#action/3.2" >Topic 1 - Computers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Topic 2 - something long</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Topic 3 - something long</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Topic 4 - something long</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Outlet />
    </Navbar>
  );
}

export default MyNavbar;
