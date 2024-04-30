import React from 'react';
import Container from 'react-bootstrap/Container';

function Lesson1() {
    return (
        <Container className='my-3'>
            <h1>Lesson 1 - Introduction to C</h1>
            <hr/>
            <h3>C Language History</h3>
            <ul>
                <li>The C programming language was developed at Bell Laboratories in 1972 by Dennis Ritchie.</li>
                <li>Its features were derived from an earlier language called “B” (Basic Combined Programming Language – BCPL).</li>
                <li>C was specifically invented for implementing the UNIX operating system.</li>
                <li>In 1978, Dennis Ritchie and Brian Kernighan published the first edition of “The C Programming Language,” commonly known as K&R C.</li>
                <li>The ANSI standard, or “ANSI C,” was completed in late 1988.</li>
            </ul>
            <hr/>
            <h3>Features And Uses Of The C Language</h3>
                <p>C language features: Reliability, Portability, Flexibility, Interactivity, Modularity, and Efficiency.<br/>C language uses: Database systems, Graphics packages, Word processors, Spreadsheets, Operating system development, Compilers and Assemblers, Network drivers, and Interpreters.</p>
            <hr/>
            <h3>Levels Of Programming Languages</h3>
            <h6>Low-Level Languages</h6>
                <ul>
                    <li>Low-level languages grant access only to the fundamental machine instruction set.</li>
                    <li>They lack higher-level abstractions.</li>
                    <li>Example: Assembly language.</li>
                </ul>
            <h6>Middle-Level Languages</h6>
                <ul>
                    <li>Middle-level languages offer essential building blocks necessary to achieve desired results.</li>
                    <li>They lack the extensive built-in functions found in high-level languages.</li>
                    <li>Examples include C and C++.</li>
                </ul>
            <h6>High-Level Languages</h6>
                <ul>
                    <li>High-level languages provide comprehensive features already integrated into the language.</li>
                    <li>Programmers can accomplish most tasks without additional effort.</li>
                    <li>Examples include Java and Python.</li>
                </ul>
        </Container>
    );
}

export default Lesson1;