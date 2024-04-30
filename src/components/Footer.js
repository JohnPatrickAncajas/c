import React from 'react';
import Container from 'react-bootstrap/Container';

function MyFooter() {
  return (
    <footer className="bg-dark text-light py-3 fixed-bottom">
      <Container>
        <p>© {new Date().getFullYear()} GitHub</p>
      </Container>
    </footer>
  );
}

export default MyFooter;
