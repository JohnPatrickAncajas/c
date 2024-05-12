import React from 'react';
import Container from 'react-bootstrap/Container';
import '../../styles/codebox.css';

function Lesson1Topic3() {
    return (
        <Container className='my-3'>
            <h1 className='h1'>Topic 3 - Computer Hardware</h1><hr/>
            <h2 className='h3'>Processing Devices</h2>
                <p>
                    Processing devices are responsible for converting raw data into meaningful information, a process known simply as processing.
                    The processor functions similarly to the brain of the computer.
                    It organizes and executes commands from the user or the software and manipulates the data.
                    Many computers are equipped with multiple processors.
                    The term Central Processing Unit (CPU) is synonymous with a computer's main processor.
                </p>
                <hr/>
            <h2 className='h3'>Memory Devices</h2>
                <p>Memory devices consist of chip sets that store data or program commands, either for short-term or long-term use. Memory is categorized into two main types:</p>
                <h3 className='h6'>Random Access Memory (RAM)</h3>
                    <ul>
                        <li>RAM temporarily stores data and program instructions for the CPU to work on.</li>
                        <li>It is volatile, which means it only retains data while powered on. The data is lost when the power goes off.</li>
                        <li>The term “random” in RAM means any part of it can be accessed at any time, contributing to its speed.</li>
                        <li>Increasing RAM typically leads to improved system performance.</li>
                    </ul>
                <h3 className='h6'>Read Only Memory (ROM)</h3>
                    <ul>
                        <li>ROM is used for the permanent storage of programs.</li>
                        <li>It is non-volatile, so it retains its contents even when the power is turned off.</li>
                        <li>It contains the essential instructions needed for the computer to function.</li>
                    </ul>
                <h3 className='h6'>Memory capacity is quantified as follows:</h3>
                    <ul>
                        <li>Kilobyte (KB): 1,000 bytes</li>
                        <li>Megabyte (MB): 1,000,000 bytes</li>
                        <li>Gigabyte (GB): 1,000,000,000 bytes</li>
                        <li>Terabyte (TB): 1,000,000,000,000 bytes.</li>
                    </ul>
                <hr/>
            <h2 className='h3'>Input and Output Devices</h2>
                <p>Input and output devices are the mediums through which a computer receives and returns data.</p>
                <h3 className='h6'>Input Devices</h3>
                    <ul>
                        <li>These devices gather data and commands from users or other systems.</li>
                        <li>Examples include keyboards, mice, scanners, digital cameras, and microphones.</li>
                    </ul>
                <h3 className='h6'>Output Devices</h3>
                    <ul>
                        <li>These devices deliver the processed data back to the user or to another system.</li>
                        <li>Examples include monitors, printers, stereo speakers, and headphones.</li>
                    </ul>
                <hr/>
            <h2 className='h3'>Communication Devices</h2>
                <p>Devices like modems and network cards handle both input and output, facilitating the exchange of information between computers.</p>
                <hr/>
            <h2 className='h3'>Storage Devices</h2>
                <p>
                    The role of storage devices is to maintain data indefinitely, even when the computer is powered down.
                    They store data that the CPU isn’t currently using.
                    Common storage mediums include magnetic and optical disks.
                    Disk drives read from and write to disks. Modern computers typically have a floppy disk drive, a hard disk drive, and an optical disk drive.
                    CD-ROM and DVD-ROM drives are prevalent optical storage devices.
                </p>
        </Container>
    );
}

export default Lesson1Topic3;