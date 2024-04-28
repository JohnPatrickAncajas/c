import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <Container className="my-5">
      <h1>Welcome to C Lesson Guide!</h1>
      <p>This is the homepage content.</p>
      <ul>
        <li>
          <Link href="/lesson1">Lesson 1</Link>
        </li>
        <li>
          <Link href="/lesson2">Lesson 2</Link>
        </li>
        <li>
          <Link href="/lesson3">Lesson 3</Link>
        </li>
      </ul>
    </Container>
  );
}

export default HomePage;
