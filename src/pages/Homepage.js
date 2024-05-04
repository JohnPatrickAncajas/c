import React from 'react';
import Container from 'react-bootstrap/Container';

function HomePage() {
  return (
    <Container className="my-3">
    <main>
      <section>
        <h1>C Lesson Guide</h1>
        <p>This guide is a companion to the <strong>Computer Programming 1</strong> curriculum, designed to provide a structured approach to learning C programming.</p>
      </section>

      <section>
        <h3>Lesson 1 - Basic Computer Concepts</h3>
        <ul>
          <li>Computers</li>
          <li>Parts of a Computer system</li>
          <li>Computer Hardware</li>
          <li>Computer Software</li>
          <li>Data and Information</li>
        </ul>
      </section>

      <section>
        <h3>Lesson 2 - Algorithms and Pseudocodes</h3>
        <ul>
          <li>Program Logic Formulation</li>
          <li>Algorithms</li>
          <li>Pseudocodes</li>
          <li>Symbols and Operators</li>
        </ul>
      </section>

      <section>
        <h3>Lesson 3 - C Programming Language</h3>
        <ul>
          <li>Introduction to C</li>
          <li>C Programming Basics</li>
        </ul>
      </section>

      <section>
        <p>This guide will evolve with the curriculum, with each section being updated with relevant content and resources.</p>
      </section>
    </main>

    </Container>
  );
}

export default HomePage;
