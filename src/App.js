import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/Navbar';
import HomePage from './components/Homepage';
import MyFooter from './components/Footer';

import { HashRouter, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact';
import Lesson1 from './pages/Lesson1';
import Lesson2 from './pages/Lesson2';
import Lesson3 from './pages/Lesson3';
import Lesson4 from './pages/Lesson4';
import Lesson5 from './pages/Lesson5';


function App() {
  return (
    <HashRouter>
      <MyNavbar />
      <Routes>
        <Route path='/*' element={<HomePage />} />
        <Route path='/Lesson1' element={<Lesson1 />} />
        <Route path='/Lesson2' element={<Lesson2 />} />
        <Route path='/Lesson3' element={<Lesson3 />} />
        <Route path='/Lesson4' element={<Lesson4 />} />
        <Route path='/Lesson5' element={<Lesson5 />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <MyFooter />
    </HashRouter>
  );
}

export default App;
