import React, { useState } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomePage() {
  const tips = [
    "C is the foundation of modern software development.",
    "Understanding pointers is crucial for C programming.",
    "Always keep your code clean and well-commented.",
    "Practice makes perfect, especially with algorithms.",
    "Mastering data structures will elevate your problem-solving skills.",
    "Debugging is an essential part of programming; embrace it.",
    "Learn to read and understand error messages; they guide you to solutions.",
    "Optimize your code only after it works correctly.",
    "Regularly back up your work to avoid losing progress.",
    "Collaborate with others to learn different approaches to coding."
  ];
  
  const [currentTip, setCurrentTip] = useState(tips[0]);
  const [lastIndex, setLastIndex] = useState(0);
  
  const showRandomTip = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * tips.length);
    } while (randomIndex === lastIndex);
  
    setCurrentTip(tips[randomIndex]);
    setLastIndex(randomIndex);
  };
  

  return (
    <Container className="my-3">
      <main>
        <section>
          <h1>Welcome to Your C Programming Guide!</h1>
          <p>Embark on your programming journey with this comprehensive guide built on the <strong>Computer Programming 1</strong> curriculum. Here, you'll find everything from the basics to advanced concepts, all designed to enhance your understanding and skills in C programming.</p>
        </section>

        <section className="mt-4">
          <h2>Ready to Dive In?</h2>
          <p>As you progress through this guide, remember that patience and practice are your best tools. Don't hesitate to revisit sections or reach out for help if you need it. And most importantly, have fun exploring the world of C programming!</p>
          <p className="p-3">Good luck on your C programming journey!</p>
        </section>

        <section>
          <div className="d-flex justify-content-between align-items-center">
            <Button onClick={showRandomTip} variant="outline-secondary" className="me-2">Show Me a Tip!</Button>
            <Button as={Link} to="/Lessons" variant="outline-secondary" className="ms-2">Start Lesson →</Button>
          </div>
          <Alert variant="light" show={!!currentTip} className="mt-3">
            <Alert.Heading>C Programming Tip</Alert.Heading>
            <p>{currentTip}</p>
          </Alert>
        </section>

      </main>
    </Container>
  );
}

export default HomePage;
