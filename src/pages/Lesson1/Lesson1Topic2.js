import React from 'react';
import Container from 'react-bootstrap/Container';
import '../../styles/codebox.css';

function Lesson1Topic2() {
    return (
        <Container className='my-3'>
            <h1>Topic 2 - Parts of a Computer System</h1><hr/>
            <h3>Computer Hardware</h3>
                <p>Computer hardware encompasses the physical electronic components that constitute a computer, which are the parts that can be observed and handled.
                    In simpler terms, they are the concrete elements of a computer.
                    The word “device” is used to describe any hardware component utilized by the computer, like keyboards, displays, modems, mice, and so on.
                    These devices are the mechanical constituents that form the structure of a computer.
                    Examples are:
                </p>
                <ul>
                    <li>Display Device (Monitor or LCD screen)</li>
                    <li>System Unit</li>
                    <li>Floppy disk drive</li>
                    <li>CD ROM drive</li>
                    <li>Hard disk drive</li>
                    <li>Keyboard</li>
                    <li>Mouse</li>
                </ul>
                <hr/>
            <h3>Peripherals</h3>
                <p>A peripheral device refers to any additional equipment that can be connected to a computer system to expand its capabilities.</p>
                <ul>
                    <li>Printer</li>
                    <li>Digital camera</li>
                    <li>Scanner</li>
                    <li>Joystick</li>
                </ul>
                <hr/>
            <h3>Computer Software</h3>
                <p>Computer software is essentially a collection of directives that instructs the computer to execute various tasks.
                   It's an intangible yet crucial component of the computer system.
                   Software comprises all the code and programs that operate the computer, managing its every action.
                   For a computer to operate, it must have software loaded onto it.
                </p>
                <hr/>
            <h3>Data and User</h3>
                <p>Data is made up of unprocessed facts that a computer can transform and analyze to produce information valuable to users.
                    In the realm of computing, data is digital, which means it is encoded as digits or numbers. This numerical format is how computers store and interpret all data.<br/>
                    Users are individuals who interact with the computer.
                    They provide instructions and commands to the computer.
                </p>
        </Container>
    );
}

export default Lesson1Topic2;