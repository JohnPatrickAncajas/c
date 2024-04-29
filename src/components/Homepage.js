import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <Container className="my-3">
      <h1>Welcome to C Lesson Guide!</h1>
      <p>This is the homepage content.</p>
      <ul>
        <li>
          <Link href="/Lesson1" to="/Lesson1">Lesson 1</Link>
        </li>
        <li>
          <Link href="/Lesson2" to="/Lesson2">Lesson 2</Link>
        </li>
        <li>
          <Link href="/Lesson3" to="/Lesson3">Lesson 3</Link>
        </li>
        <li>
          <Link href="/Lesson4" to="/Lesson4">Lesson 4</Link>
        </li>
        <li>
          <Link href="/Lesson5" to="/Lesson5">Lesson 5</Link>
        </li>
      </ul>
    </Container>
  );
}

export default HomePage;
