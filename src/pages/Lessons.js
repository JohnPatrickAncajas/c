import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import '../styles/lessons.css';

function Lessons() {
    return (
        <Container className='my-3'>
            <h1>Lessons</h1>
            <hr/>
            <main>
                <section><Link to="/Lessons/Lesson1"><h3>Lesson 1 - Basic Computer Concepts</h3></Link><ul>
                    <li><Link to="/Lessons/Lesson1/Topic1" className="link-style"><h5>Topic 1 - Computers</h5><ul>
                        <li>What are Computers?</li>
                        <li>Information Processing Cycle</li>
                        <li>Input</li>
                        <li>Processing</li>
                        <li>Output</li>
                        <li>Memory and Storage</li>
                    </ul></Link></li>
                    
                    <li><Link to="/Lessons/Lesson1/Topic2" className="link-style"><p>Topic 2 - Parts Of A Computer System</p><ul>
                        <li>Hardware</li>
                        <li>Pheripherals</li>
                        <li>Software</li>
                        <li>Data</li>
                        <li>User</li>
                    </ul></Link></li>
                    
                    <li><Link to="/Lessons/Lesson1/Topic3" className="link-style"><p>Topic 3 - Computer Hardware</p><ul>
                        <li>Processing Devices</li>
                        <li>Memory Devices</li>
                        <li>Input and Output Devices</li>
                        <li>Communication Devices</li>
                        <li>Storage Devices</li>
                    </ul></Link></li>
                    
                    <li><Link to="/Lessons/Lesson1/Topic4" className="link-style"><p>Topic 4 - Computer Software</p><ul>
                        <li>System Software</li>
                        <li>Application Software</li>
                    </ul></Link></li>

                    <li><Link to="/Lessons/Lesson1/Topic5" className="link-style"><p>Topic 5 - Data and Information</p><ul>
                        <li>Data</li>
                        <li>Information</li>
                        <li>Files</li>
                        <li>Extensions and Formats</li>
                    </ul></Link></li>
                </ul></section><hr/>

                <section><Link to="/Lessons/Lesson2">Lesson 2 - Algorithms and Pseudocodes</Link><ul>
                    <li><Link to="/Lessons/Lesson2/Topic1" className="link-style"><p>Topic 1 - Program Logic Formulation</p><ul>
                        <li>What is Program Logic Formulation?</li>
                        <li>Logic</li>
                    </ul></Link></li>
                    
                    <li><Link to="/Lessons/Lesson2/Topic2" className="link-style"><p>Topic 2 - Algorithms</p><ul>
                        <li>What are Algorithms?</li>
                        <li>Properties of Algorithm</li>
                        <li>Ways to express an Algorithm</li>
                    </ul></Link></li>
                    
                    <li><Link to="/Lessons/Lesson2/Topic2" className="link-style"><p>Topic 3 - Pseudocodes</p><ul>
                        <li>What are Pseudocodes?</li>
                        <li>Logical structure of Pseudocode</li>
                        <li>Rules For Pseudocodes</li>
                        <li>Advantages and Limitations</li>
                    </ul></Link></li>

                    <li><Link to="/Lessons/Lesson2/Topic2" className="link-style"><p>Topic 4 - Symbols And Operators</p><ul>
                        <li>Calculation Symbols</li>
                        <li>Selection Symbols</li>
                        <li>Logical Operators</li>
                    </ul></Link></li>
                </ul></section><hr/>

                <section><Link to="/Lessons/Lesson3">Lesson 3 - C Programming Language</Link><ul>
                    <li><Link to="/Lessons/Lesson3/Topic1" className="link-style"><p>Topic 1 - Introduction To C</p><ul>
                        <li>C Language History</li>
                        <li>Features And Uses Of The C Language</li>
                        <li>Levels Of Programming Languages</li>
                        <li>Types Of Programming Languages</li>
                    </ul></Link></li>
                    
                    <li><Link to="/Lessons/Lesson3/Topic2" className="link-style"><p>Topic 2 - C Programming Basics</p><ul>
                        <li>Basic Input And Output In C</li>
                        <li>Preprocessor Directives</li>
                        <li>Basic List Of Header Files</li>
                        <li>Key Points To Remember</li>
                    </ul></Link></li>
                </ul></section><hr/>

                <section><Link to="/Lessons/Lesson4">Lesson 4 - Fundamentals Of C Programming</Link><ul>
                    <li><Link to="/Lessons/Lesson4/Topic1" className="link-style"><p>Topic 1 - Basic Escape Sequences</p><ul>
                        <li>What are Escape Sequences?</li>
                        <li>Common Escape Sequences</li>
                        <li>Usage of Escape Sequences</li>
                    </ul></Link></li>
                    
                    <li><Link to="/Lessons/Lesson4/Topic2" className="link-style"><p>Topic 2 - Placeholders</p><ul>
                        <li>What are Placeholders?</li>
                        <li>Placeholders in Output Statements</li>
                        <li>Format Specifier</li>
                    </ul></Link></li>

                    <li><Link to="/Lessons/Lesson4/Topic3" className="link-style"><p>Topic 3 - Input Operations</p><ul>
                        <li>Accepting User Input</li>
                        <li>For Integers</li>
                        <li>For String</li>
                        <li>For Others</li>
                    </ul></Link></li>
                </ul></section><hr/>

                <section><Link to="/Lessons/Lesson5">Lesson 5 - C Programming Language Operators</Link><ul>
                    <li><Link to="/Lessons/Lesson5/Topic1" className="link-style"><p>Topic 1 - Operators</p><ul>
                        <li>What are Operators?</li>
                        <li>Types of Operators</li>
                    </ul></Link></li>
                    
                    <li><Link to="/Lessons/Lesson5/Topic2" className="link-style"><p>Topic 2 - Arithmetic Operators</p><ul>
                        <li>What are Arithmetic Operators?</li>
                        <li>Symbols for Arithmetic Operaors</li>
                        <li>Usage of Arithmetic Operators</li>
                    </ul></Link></li>

                    <li><Link to="/Lessons/Lesson5/Topic3" className="link-style"><p>Topic 3 - Assignment Operators</p><ul>
                        <li>What are Assignment Operators?</li>
                        <li>Symbols for Assignment Operaors</li>
                        <li>Usage of Assignment Operators</li>
                    </ul></Link></li>

                    <li><Link to="/Lessons/Lesson5/Topic4" className="link-style"><p>Topic 4 - Relational Operators</p><ul>
                        <li>What are Relational Operators?</li>
                        <li>Symbols for Relational Operaors</li>
                        <li>Usage of Relational Operators</li>
                    </ul></Link></li>

                    <li><Link to="/Lessons/Lesson5/Topic5" className="link-style"><p>Topic 5 - Logical Operators</p><ul>
                        <li>What are Logical Operators?</li>
                        <li>Symbols for Logical Operaors</li>
                        <li>Usage of Logical Operators</li>
                    </ul></Link></li>

                    <li><Link to="/Lessons/Lesson5/Topic6" className="link-style"><p>Topic 6 - Increment/Decrement Operators</p><ul>
                        <li>What are Increment/Decrement Operators?</li>
                        <li>Symbols for Increment/Decrement Operaors</li>
                        <li>Usage of Increment/Decrement Operators</li>
                    </ul></Link></li>
                </ul></section><hr/>

                <section><Link to="/Lessons/Lesson6">Lesson 6 - C Programming Control Structures</Link><ul>
                    <li><Link to="/Lessons/Lesson6/Topic1" className="link-style"><p>Topic 1 - Statements</p><ul>
                        <li>What are Statements?</li>
                        <li>Simple Statement</li>
                        <li>Compound Statement or Block</li>
                    </ul></Link></li>
                    
                    <li><Link to="/Lessons/Lesson6/Topic2" className="link-style"><p>Topic 2 - Control Structures</p><ul>
                        <li>What are Control Structures?</li>
                        <li>Types of Control Structures</li>
                    </ul></Link></li>

                    <li><Link to="/Lessons/Lesson6/Topic3" className="link-style"><p>Topic 3 - If Structure</p><ul>
                        <li>What are If structures?</li>
                        <li>Format of If structures</li>
                        <li>Usage of If structures</li>
                    </ul></Link></li>

                    <li><Link to="/Lessons/Lesson6/Topic4" className="link-style"><p>Topic 4 - If-Else Structure</p><ul>
                        <li>What are If-Else structures?</li>
                        <li>Format of If-Else structures</li>
                        <li>Usage of If-Else structures</li>
                    </ul></Link></li>

                    <li><Link to="/Lessons/Lesson6/Topic5" className="link-style"><p>Topic 5 - If-Else If Structure</p><ul>
                        <li>What are If-Else If structures?</li>
                        <li>Format of If-Else If structures</li>
                        <li>Usage of If-Else If structures</li>
                    </ul></Link></li>

                    <li><Link to="/Lessons/Lesson6/Topic6" className="link-style"><p>Topic 6 - Nested If Structure</p><ul>
                        <li>What are Nested If structures?</li>
                        <li>Format of Nested If structures</li>
                        <li>Usage of Nested If structures</li>
                    </ul></Link></li>

                    <li><Link to="/Lessons/Lesson6/Topic7" className="link-style"><p>Topic 7 - Switch Case Structure</p><ul>
                        <li>What are Switch Case structures?</li>
                        <li>Format of Switch Case structures</li>
                        <li>Usage of Switch Case structures</li>
                    </ul></Link></li>
                </ul></section><hr/>

                <section><Link to="/Lessons/Lesson7">Lesson 7 - To be added.</Link><ul>
                    <li><Link to="/Lessons/Lesson7/Topic1" className="link-style"><p>Topic 1 - To be added.</p><ul>
                        <li>To be added.</li>
                        <li>To be added.</li>
                        <li>To be added.</li>
                    </ul></Link></li>
                    
                    <li><Link to="/Lessons/Lesson7/Topic2" className="link-style"><p>Topic 2 - To be added.</p><ul>
                        <li>To be added.</li>
                        <li>To be added.</li>
                        <li>To be added.</li>
                    </ul></Link></li>
                </ul></section><hr/>

                <section><Link to="/Lessons/Lesson8">Lesson 8 - To be added.</Link><ul>
                    <li><Link to="/Lessons/Lesson8/Topic1" className="link-style"><p>Topic 1 - To be added.</p><ul>
                        <li>To be added.</li>
                        <li>To be added.</li>
                        <li>To be added.</li>
                    </ul></Link></li>
                    
                    <li><Link to="/Lessons/Lesson8/Topic2" className="link-style"><p>Topic 2 - To be added.</p><ul>
                        <li>To be added.</li>
                        <li>To be added.</li>
                        <li>To be added.</li>
                    </ul></Link></li>
                </ul></section><hr/>

                <section><Link to="/Lessons/Lesson9">Lesson 9 - To be added.</Link><ul>
                    <li><Link to="/Lessons/Lesson9/Topic1" className="link-style"><p>Topic 1 - To be added.</p><ul>
                        <li>To be added.</li>
                        <li>To be added.</li>
                        <li>To be added.</li>
                    </ul></Link></li>
                    
                    <li><Link to="/Lessons/Lesson9/Topic2" className="link-style"><p>Topic 2 - To be added.</p><ul>
                        <li>To be added.</li>
                        <li>To be added.</li>
                        <li>To be added.</li>
                    </ul></Link></li>
                </ul></section><hr/>
            </main>
        </Container>
    );
}

export default Lessons;
