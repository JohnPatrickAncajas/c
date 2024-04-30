import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

import MyNavbar from './components/Navbar';
import HomePage from './components/Homepage';
import MyFooter from './components/Footer';

import Lessons from './pages/Lessons';
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
        <Route index path='/' element={<HomePage />} />
        <Route path='/Lessons' element={<Lessons />} />
        <Route path='/Lessons/Lesson1' element={<Lesson1 />} />
        <Route path='/Lessons/Lesson2' element={<Lesson2 />} />
        <Route path='/Lessons/Lesson3' element={<Lesson3 />} />
        <Route path='/Lessons/Lesson4' element={<Lesson4 />} />
        <Route path='/Lessons/Lesson5' element={<Lesson5 />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <MyFooter />
    </HashRouter>
  );
}

export default App;
