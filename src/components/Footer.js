import React from 'react';
import Container from 'react-bootstrap/Container';

function MyFooter() {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <p>© {new Date().getFullYear()} GitHub</p>
      </Container>
    </footer>
  );
}

export default MyFooter;
