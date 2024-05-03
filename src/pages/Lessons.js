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
                <section><Link to="/Lessons/Lesson1" className="link-style-main">Lesson 1 - Basic Computer Concepts</Link><ul>
                    <li><Link to="/Lessons/Lesson1/Topic1" className="link-style"><p>Topic 1 - What Is A Computer?</p><ul>
                        <li>Computers</li>
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
                    
                    <li><Link to="/Lessons/Lesson1/Topic3" className="link-style"><p>Topic 3 - Essential Computer Hardware</p><ul>
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
                </ul></section>

                <section><Link to="/Lessons/Lesson3" className="link-style-main">Lesson 3 - C Programming Language</Link><ul>
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
                        <li>Key Points To Remember In C Programming Basics</li>
                    </ul></Link></li>
                </ul></section>
            </main>
        </Container>
    );
}

export default Lessons;
