import React from 'react';
import Container from 'react-bootstrap/Container';

function Contact() {
    return (
        <Container className='my-3'>

        <h1>Contact Information</h1><hr/>
        
        <main>
            <section>
                <h3>Personal Information</h3>
                <p><strong>Name:</strong> John Patrick DP. Ancajas</p>
                <p><strong>College:</strong> Technological University of the Philippines</p>
            </section><hr/>

            <section>
                <h3>Contact Methods</h3>
                <p><strong>Email:</strong> Email</p>
                <p><strong>LinkedIn:</strong><a href="LinkedIn URL">LinkedIn</a></p>
                <p><strong>Facebook:</strong><a href="Facebook URL">Facebook</a></p>
                <p><strong>GitHub:</strong><a href="GitHub URL">GitHub</a></p>
            </section>

            <section>
                <p>Portfolio image and link goes here</p>
            </section>
        </main>
        </Container>
    );
}

export default Contact;