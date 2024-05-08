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
                        <li><Link to="/Lessons/Lesson3/Topic1">Topic 1 - Introduction To C: Discover the origins, importance, and applications of the C programming language.</Link></li>
                        <li><Link to="/Lessons/Lesson3/Topic2">Topic 2 - C Programming Basics: Learn about the elements of C.</Link></li>
                    </ul>
                    <p>This lesson introduces the C programming language, covering its basics and foundational concepts.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header><h4>Lesson 4 - Fundamentals Of C Programming</h4></Accordion.Header>
                    <Accordion.Body>
                    <ul>
                        <li><Link to="/Lessons/Lesson4/Topic1">Topic 1 - Basic Escape Sequences: Learn about special character combinations that perform various actions within strings, like newlines or tabs.</Link></li>
                        <li><Link to="/Lessons/Lesson4/Topic2">Topic 2 - Placeholders: Explore how placeholders are used in formatted output to represent data types in C.</Link></li>
                        <li><Link to="/Lessons/Lesson4/Topic3">Topic 3 - Input Operations: Understand the methods for receiving user input and processing it within your C programs.</Link></li>
                    </ul>
                    <p>This lesson focuses on the essential building blocks of C programming, including understanding escape sequences, placeholders, and input operations.</p>
                    </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="5">
                    <Accordion.Header><h4>Lesson 5 - C Programming Language Operators</h4></Accordion.Header>
                    <Accordion.Body>
                    <ul>
                        <li><Link to="/Lessons/Lesson5/Topic1">Topic 1 - Operators: Understand the different types of operators, including arithmetic, assignment, relational, and logical operators.</Link></li>
                        <li><Link to="/Lessons/Lesson5/Topic2">Topic 2 - Arithmetic Operators Learn how to perform basic mathematical operations like addition, subtraction, multiplication, and division.</Link></li>
                        <li><Link to="/Lessons/Lesson5/Topic3">Topic 3 - Assignment Operators: Discover how to assign values to variables using various assignment operators.</Link></li>
                        <li><Link to="/Lessons/Lesson5/Topic4">Topic 4 - Relational Operators: Explore comparisons between variables and their results (e.g., greater than, less than, equal to).</Link></li>
                        <li><Link to="/Lessons/Lesson5/Topic5">Topic 5 - Logical Operators: Master logical operations such as AND, OR, and NOT.</Link></li>
                        <li><Link to="/Lessons/Lesson5/Topic6">Topic 6 - Increment/Decrement Operators: Study the increment (++) and decrement (-) operators for efficient code.</Link></li>
                    </ul>
                    <p>This comprehensive lesson is designed to equip you with a thorough understanding of the various operators that form the backbone of programming logic in C</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                    <Accordion.Header><h4>Lesson 6 - C Programming Control Structures</h4></Accordion.Header>
                    <Accordion.Body>
                    <ul>
                        <li><Link to="/Lessons/Lesson6/Topic1">Topic 1 - Statements: Introduction to the basic units of code and execution in C.</Link></li>
                        <li><Link to="/Lessons/Lesson6/Topic2">Topic 2 - Control Structures: Overview of the mechanisms that control the flow of execution.</Link></li>
                        <li><Link to="/Lessons/Lesson6/Topic3">Topic 3 - If Structure: Detailed look at the 'if' statement for single-condition checks.</Link></li>
                        <li><Link to="/Lessons/Lesson6/Topic4">Topic 4 - If-Else Structure: Exploration of the 'if-else' statement for two-way branching.</Link></li>
                        <li><Link to="/Lessons/Lesson6/Topic5">Topic 5 - If-Else If Structure: Understanding how to handle multiple conditions with 'if-else if'.</Link></li>
                        <li><Link to="/Lessons/Lesson6/Topic6">Topic 6 - Nested If Structure: Techniques for using 'if' statements within 'if' statements for complex decision-making.</Link></li>
                        <li><Link to="/Lessons/Lesson6/Topic7">Topic 7 - Switch Case Structure: Utilization of the 'switch case' for cleaner multi-way branching based on variable values.</Link></li>
                    </ul>
                    <p>In this lesson, we examine the control structures that are fundamental to directing the flow of a C program. We start with basic statements, move on to the various 'if' structures that allow for conditional execution, and conclude with the 'switch case' structure for multi-way branching.</p>
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
