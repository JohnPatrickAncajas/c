import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link, Outlet } from 'react-router-dom';

function MyNavbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY < lastScrollY) {
      // if scrolling up
      setShowNavbar(true);
    } else if (window.scrollY > lastScrollY) {
      // if scrolling down
      setShowNavbar(false);
    }
    // remember current scroll position
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <Navbar expand="lg" bg="dark" variant="dark" style={{ top: showNavbar ? '0' : '-100px', transition: 'top 0.3s' }}>
      <Container>
        <Navbar.Brand as={Link} to="/">C Lesson Guide</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto flex-grow-1">
          </Nav>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Lessons">Lessons</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Outlet />
    </Navbar>
  );
}

export default MyNavbar;
