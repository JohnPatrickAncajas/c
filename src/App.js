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
import Lesson1 from './pages/Lesson1';
import Lesson2 from './pages/Lesson2';
import Lesson3 from './pages/Lesson3';
import Lesson4 from './pages/Lesson4';
import Lesson5 from './pages/Lesson5';
import { Nav, Navbar } from 'react-bootstrap';


function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/About' element={<About />} />
      </Routes>
      <MyFooter />
    </Router>
  );
}

export default App;
