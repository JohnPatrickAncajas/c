import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import '../styles/lessons.css';

function Lessons() {
    return (
        <Container className='my-3'>
            <h1>Lessons</h1>
            <hr/>

            <ul>
                <li className="list-style"><Link to="/Lessons/Lesson1" className="link-style">Lesson 1 - Introduction To C<br/>
                <ul>
                    <li>C Language History</li>
                    <li>Features And Uses Of The C Language</li>
                    <li>Levels Of Programming Languages</li>
                    <li>Types Of Programming Languages</li>
                </ul></Link></li>

                <li className="list-style"><Link to="/Lessons/Lesson2" className="link-style">Lesson 2 - C Programming Basics
                <ul>
                    <li>Basic Input And Output In C</li>
                    <li>Preprocessor Directives</li>
                    <li>Basic List Of Header Files</li>
                    <li>Key Points To Remember In C Programming Basics</li>
                </ul></Link></li>
                
                <li className="list-style"><Link to="/Lessons/Lesson3" className="link-style">Lesson 3</Link></li>
                <li className="list-style"><Link to="/Lessons/Lesson4" className="link-style">Lesson 4</Link></li>
                <li className="list-style"><Link to="/Lessons/Lesson5" className="link-style">Lesson 5</Link></li>
            </ul>
        </Container>
    );
}

export default Lessons;
