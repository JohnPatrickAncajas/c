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

                <section className="list-style"><Link to="/Lessons/Lesson1" className="link-style">Lesson 1 - C Programming Language</Link><ul>
                    <li><Link to="/Lessons/Lesson3/Topic1" className="link-style"><p>Lesson 1 - Introduction To C</p><ul>
                        <li>Topic 1 - C Language History</li>
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
                
                <li className="list-style"><Link to="/Lessons/Lesson3" className="link-style">Lesson 3</Link></li>
                <li className="list-style"><Link to="/Lessons/Lesson4" className="link-style">Lesson 4</Link></li>
                <li className="list-style"><Link to="/Lessons/Lesson5" className="link-style">Lesson 5</Link></li>
            </main>
        </Container>
    );
}

export default Lessons;
