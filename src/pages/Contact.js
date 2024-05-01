import React from 'react';
import Container from 'react-bootstrap/Container';

function Contact() {
    return (
        <Container className='my-3'>

        <h1>Contact Information</h1>
        
        <main>
            <section>
                <h2>Personal Information</h2>
                <p><strong>Name:</strong> John Patrick DP. Ancajas</p>
                <p><strong>Year:</strong> BSCS - 1A</p>
            </section>

            <section>
                <h2>Contact Methods</h2>
                <p><strong>Email:</strong> Email</p>
                <p><strong>LinkedIn:</strong><a href="LinkedIn URL">LinkedIn</a></p>
                <p><strong>Facebook:</strong><a href="Facebook URL">Facebook</a></p>
                <p><strong>GitHub:</strong><a href="GitHub URL">GitHub</a></p>
            </section>

            <section>
                <p>Portfolio link here</p>
            </section>
        </main>
        </Container>
    );
}

export default Contact;