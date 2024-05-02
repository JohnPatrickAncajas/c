import React from 'react';
import Container from 'react-bootstrap/Container';
import '../../styles/codebox.css';

function Lesson2() {
    return (
        <Container className='my-3'>
            <h1>Lesson 2 - C Programming Basics</h1>
            <hr/>
            <h3>Basic Input And Output In C</h3>
            <div className="codebox overflow-auto">
                <p><span className='green'>#include &lt;stdio.h&gt;</span></p>
                <p></p>
                <p><span className='blue'>int</span> main() &#123;</p>
                <p></p>
                <p><span className='tab'/><span className='blue'>int</span> number<span className='red'>;</span></p>
                <p></p>
                <p><span className='tab'/><span className='gray'>{'/* a comment about something */'}</span></p>
                <p></p>
                <p><span className='tab'/>printf<span className='red'>&#40;</span><span className='lightblue'>"Enter an integer: "</span><span className='red'>&#41;</span><span className='red'>;</span></p>
                <p><span className='tab'/>scanf<span className='red'>&#40;</span><span className='lightblue'>"%d"</span>, &number<span className='red'>&#41;</span><span className='red'>;</span></p>
                <p><span className='tab'/>printf<span className='red'>&#40;</span><span className='lightblue'>"You entered: %d\n"</span>, number<span className='red'>&#41;</span><span className='red'>;</span></p>
                <p></p>
                <p><span className='tab'/><span className='blue'>return</span> <span className='pink'>0</span><span className='red'>;</span></p>
                <p>&#125;</p>
            </div>
            <ul>
                <li>The line with <b>#include &lt;stdio.h&gt;</b> is a directive that tells the compiler to incorporate the Standard Input Output header file from the C library before the compilation process of a C program starts.</li>
                <li>The <b>int main()</b> function serves as the entry point for any C program, marking where the program's execution will commence.</li>
                <li>The opening curly brace <b>&#125;</b> signifies the start of the main function's body.</li>
                <li>Any text enclosed within <b>{'/* */'}</b> is a comment and is disregarded by the compiler during the compilation and execution phases of a C program.</li>
                <li>The <b>printf</b> function is used to display text on the screen.</li>
                <li>The statement <b>return 0;</b> within the main function signals the end of the program and returns a value of 0.</li>
                <li>The closing curly brace <b>&#125;</b> denotes the conclusion of the main function.</li>
            </ul>
            <hr/>
            <h3>Preprocessor Directives</h3>
                <p><b>#include</b> preprocessor - it is used to include header files to a C program.</p>
                <p><b>#define</b> preprocessor - it is used to define a fragment of code that is given with a name.</p>
            <hr/>
            <h3>Basic List Of Header Files</h3>
                <ul>
                    <li><b>stdio.h</b> - input and output functions.</li>
                    <li><b>conio.h</b> - console input and output functions.</li>
                    <li><b>ctype.h</b> - character handling functions</li>
                    <li><b>math.h</b> - mathematics functions </li>
                    <li><b>string.h</b> - string functions</li>
                    <li><b>time.h</b> - date and time functions </li>
                </ul>
            <hr/>
            <h3>Key Points To Remember In C Programming Basics</h3>
                <p>1. C language is a case sensitive programming language.</p>
                <p>2. Each C programming statement is ended with semicolon which are referred to as statement terminator.</p>
                <p>3. The printf() command is used to print the output onto the screen.</p>
                <p>4. C programs are compiled using C compilers and displays output when executed.</p>
        </Container>
    );
}

export default Lesson2;