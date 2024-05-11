import React from 'react';
import Container from 'react-bootstrap/Container';
import '../../styles/codebox.css';

function Lesson1Topic1() {
    return (
        <Container className='my-3'>
            <h1>Topic 1 - Computers</h1><hr/>
            <h3>What are Computers?</h3>
                <ul>
                    <li>A computer is fundamentally an electronic apparatus that takes in data, manipulates it (turning it into information beneficial to users), and then outputs and retains that information.</li>
                    <li>The operation of computers is governed by pre-set instructions that convert raw data into significant information.</li>
                    <li>In essence, a computer is an apparatus that receives input, processes that input, generates output and retains data in memory/storage.</li>
                </ul>
            <hr/>
            <h3>Input</h3>
                <p>Input refers to the data that is fed into a computer by an individual, the surrounding environment, or another computer. Examples are:</p>
                <ul>
                    <li>Text and characters</li>
                    <li>Numerical data</li>
                    <li>Images</li>
                    <li>Sound waves captured by a microphone</li>
                    <li>Data received from other computers</li>
                    <li>Environmental readings like temperature, velocity, and pressure from various sensors</li>
                </ul>
            <hr/>
            <h3>Processing</h3>
                <p>Data consist of symbols that denote unprocessed facts and concepts related to individuals, locations, occurrences, and items that hold significance within an organization.
                    A computer program, or software, is composed of a sequence of directives that instructs a computer on the execution of a processing operation.
                    Here are some instances of processing tasks:</p>
                <ul>
                    <li>Performing arithmetic operations</li>
                    <li>Organizing a sequence</li>
                    <li>Altering images</li>
                    <li>Creating charts</li>
                </ul>
            <hr/>
            <h3>Output</h3>
                <p>Output is the information that a computer generates as a consequence of processing data.
                    An output device is a tool that exhibits, prints, or sends out the processed results.
                    Some examples of output include:</p>
                <ul>
                    <li>Visuals displayed on a screen</li>
                    <li>Documents that have been printed</li>
                    <li>Audio output</li>
                    <li>Commands sent to various device controllers</li>
                </ul>
            <hr/>
            <h3>Memory and Storage</h3>
                <p>Memory refers to the part of the computer that temporarily retains data currently being processed or awaiting processing, storage, or output.
                    Storage is the part of the computer where data is kept on a long-term basis when it’s not being processed.
                    Here are some examples of storage mediums:
                </p>
                <ul>
                    <li>Magnetic disks</li>
                    <li>CD-ROM (Compact Disk Read-Only Memory)</li>
                    <li>Magnetic tapes</li>
                    <li>Flash drives</li>
                    <li>Memory cards</li>
                    <li>Floppy disks</li>
                </ul>
        </Container>
    );
}

export default Lesson1Topic1;