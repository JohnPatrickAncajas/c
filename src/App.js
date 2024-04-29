import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/Navbar';
import HomePage from './components/Homepage';
import MyFooter from './components/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams } from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact';
import Lesson1 from './pages/Lesson1';
import Lesson2 from './pages/Lesson2';
import Lesson3 from './pages/Lesson3';
import Lesson4 from './pages/Lesson4';
import Lesson5 from './pages/Lesson5';


function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path='/c/*' element={<HomePage />} />
        <Route path='/c/Lesson1' element={<Lesson1 />} />
        <Route path='/c/Lesson2' element={<Lesson2 />} />
        <Route path='/c/About' element={<About />} />
        <Route path='/c/Contact' element={<Contact />} />
      </Routes>
      <MyFooter />
    </Router>
  );
}

export default App;
