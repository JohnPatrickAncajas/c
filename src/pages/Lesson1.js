import React from 'react';
import Container from 'react-bootstrap/Container';

function Lesson1() {
    return (
        <Container className='my-3'>
            <h1>Lesson 1 - Introduction To C</h1>
            <hr/>
            <h3>C Language History</h3>
            <ul>
                <li>The C programming language was developed at Bell Laboratories in 1972 by Dennis Ritchie.</li>
                <li>Its features were derived from an earlier language called “B” (Basic Combined Programming Language - BCPL).</li>
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
            <hr/>
            <h3>Types Of Programming Languages</h3>
                <h6>Procedure Oriented Language</h6>
                <ul>
                    <li>Also known as Structure Oriented Language.</li>
                    <li>Such languages break down extensive programs into smaller, manageable functions.</li>
                    <li>The emphasis is on the functions and procedures that process data.</li>
                    <li>The design of the program adheres to a “Top-Down Approach”.</li>
                    <li>Notable languages include C, Pascal, ALGOL, and Modula-2.</li>
                </ul>
                <h6>Object Oriented Language</h6>
                    <ul>
                        <li>These languages organize programs around objects.</li>
                        <li>The focus is primarily on the data being manipulated rather than the functions or procedures.</li>
                        <li>The architecture of the program is based on a “Bottom-Up Approach”.</li>
                        <li>Examples of these languages are C++, JAVA, and C#.</li>
                    </ul>     
        </Container>
    );
}

export default Lesson1;