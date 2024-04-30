import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function Lessons() {
    return (
        <Container className='my-3'>
            <h1>Lessons</h1>
            <ul>
            <li>
            <Link to="/Lessons/Lesson1">Lesson 1</Link>
            </li>
            <li>
            <Link to="/Lessons/Lesson2">Lesson 2</Link>
            </li>
            <li>
            <Link to="/Lessons/Lesson3">Lesson 3</Link>
            </li>
            <li>
            <Link to="/Lessons/Lesson4">Lesson 4</Link>
            </li>
            <li>
            <Link to="/Lessons/Lesson5">Lesson 5</Link>
            </li>
        </ul>
        </Container>
    );
}

export default Lessons;