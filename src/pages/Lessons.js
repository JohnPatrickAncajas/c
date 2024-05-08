import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import '../styles/lessons.css';

function Lessons() {
    return (
        <Container className='my-3'>
            <h1>Lessons</h1><hr/>
            <main>
                <Accordion defaultActiveKey="1" alwaysOpen>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h4>Lesson 1 - Basic Computer Concepts</h4></Accordion.Header>
                    <Accordion.Body>
                    <ul>
                        <li><Link to="/Lessons/Lesson1/Topic1">Topic 1 - Computers: An introduction to the world of computing and its significance.</Link></li>
                        <li><Link to="/Lessons/Lesson1/Topic2">Topic 2 - Parts of a Computer System: A breakdown of the various components that make up a computer system.</Link></li>
                        <li><Link to="/Lessons/Lesson1/Topic3">Topic 3 - Computer Hardware: Insight into the physical parts of a computer and their functions.</Link></li>
                        <li><Link to="/Lessons/Lesson1/Topic4">Topic 4 - Computer Software: Understanding the programs and operating systems that run on a computer.</Link></li>
                        <li><Link to="/Lessons/Lesson1/Topic5">Topic 5 - Data and Information: Differentiating between raw data and processed information.</Link></li>
                    </ul>
                    <p>In this lesson, we explore fundamental concepts related to computers. We cover topics such as the components of a computer system, computer hardware, software, and the distinction between data and information.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header><h4>Lesson 2 - Algorithms and Pseudocodes</h4></Accordion.Header>
                    <Accordion.Body>
                    <ul>
                        <li><Link to="/Lessons/Lesson2/Topic1">Topic 1 - Program Logic Formulation: Understanding how to express program logic systematically.</Link></li>
                        <li><Link to="/Lessons/Lesson2/Topic2">Topic 2 - Algorithms: Learning about step-by-step procedures to solve problems.</Link></li>
                        <li><Link to="/Lessons/Lesson2/Topic3">Topic 3 - Pseudocodes: Exploring a high-level description of an algorithm using plain language.</Link></li>
                        <li><Link to="/Lessons/Lesson2/Topic4">Topic 4 - Symbols And Operators: Familiarizing yourself with symbols and operators used in programming.</Link></li>
                    </ul>
                    <p>This lesson provides an essential guide to formulating program logic, creating algorithms, writing pseudocode, and understanding the symbols and operators used in programming</p>
                    </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="3">
                    <Accordion.Header><h4>Lesson 3 - C Programming Language</h4></Accordion.Header>
                    <Accordion.Body>
                    <ul>
                        <li><Link to="/Lessons/Lesson3/Topic1">Topic 1 - Introduction To C</Link></li>
                        <li><Link to="/Lessons/Lesson3/Topic2">Topic 2 - C Programming Basics</Link></li>
                    </ul>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header><h4>Lesson 4 - Fundamentals Of C Programming</h4></Accordion.Header>
                    <Accordion.Body>

                    <ul>
                        <li><Link to="/Lessons/Lesson4/Topic1">Topic 1 - Basic Escape Sequences</Link></li>
                        <li><Link to="/Lessons/Lesson4/Topic2">Topic 2 - Placeholders</Link></li>
                        <li><Link to="/Lessons/Lesson4/Topic3">Topic 3 - Input Operations</Link></li>
                    </ul>
                    </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="5">
                    <Accordion.Header><h4>Lesson 5 - C Programming Language Operators</h4></Accordion.Header>
                    <Accordion.Body>
                    <ul>
                        <li><Link to="/Lessons/Lesson5/Topic1">Topic 1 - Operators</Link></li>
                        <li><Link to="/Lessons/Lesson5/Topic2">Topic 2 - Arithmetic Operators</Link></li>
                        <li><Link to="/Lessons/Lesson5/Topic3">Topic 3 - Assignment Operators</Link></li>
                        <li><Link to="/Lessons/Lesson5/Topic4">Topic 4 - Relational Operators</Link></li>
                        <li><Link to="/Lessons/Lesson5/Topic5">Topic 5 - Logical Operators</Link></li>
                        <li><Link to="/Lessons/Lesson5/Topic6">Topic 6 - Increment/Decrement Operators</Link></li>
                    </ul>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                    <Accordion.Header><h4>Lesson 6 - C Programming Control Structures</h4></Accordion.Header>
                    <Accordion.Body>
                    <ul>
                        <li><Link to="/Lessons/Lesson6/Topic1">Topic 1 - Statements</Link></li>
                        <li><Link to="/Lessons/Lesson6/Topic2">Topic 2 - Control Structures</Link></li>
                        <li><Link to="/Lessons/Lesson6/Topic3">Topic 3 - If Structure</Link></li>
                        <li><Link to="/Lessons/Lesson6/Topic4">Topic 4 - If-Else Structure</Link></li>
                        <li><Link to="/Lessons/Lesson6/Topic5">Topic 5 - If-Else If Structure</Link></li>
                        <li><Link to="/Lessons/Lesson6/Topic6">Topic 6 - Nested If Structure</Link></li>
                        <li><Link to="/Lessons/Lesson6/Topic7">Topic 7 - Switch Case Structure</Link></li>
                    </ul>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7">
                    <Accordion.Header><h4>Lesson 7 - To be added</h4></Accordion.Header>
                    <Accordion.Body>
                    <ul>
                        <li><Link to="/Lessons/Lesson7/Topic1">Topic 1 - To be added</Link></li>
                        <li><Link to="/Lessons/Lesson7/Topic2">Topic 2 - To be added</Link></li>
                    </ul>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="8">
                    <Accordion.Header><h4>Lesson 8 - To be added</h4></Accordion.Header>
                    <Accordion.Body>
                    <ul>
                        <li><Link to="/Lessons/Lesson8/Topic1">Topic 1 - To be added</Link></li>
                        <li><Link to="/Lessons/Lesson8/Topic2">Topic 2 - To be added</Link></li>
                    </ul>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="9">
                    <Accordion.Header><h4>Lesson 9 - To be added</h4></Accordion.Header>
                    <Accordion.Body>
                    <ul>
                        <li><Link to="/Lessons/Lesson9/Topic1">Topic 1 - To be added</Link></li>
                        <li><Link to="/Lessons/Lesson9/Topic2">Topic 2 - To be added</Link></li>
                    </ul>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
            </main>
        </Container>
    );
}

export default Lessons;
