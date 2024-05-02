import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

import MyNavbar from './components/Navbar';
import HomePage from './pages/Homepage';
import MyFooter from './components/Footer';

import Lessons from './pages/Lessons';
import Contact from './pages/Contact';
import Lesson1Topic1 from './pages/Lesson3/Lesson3Topic1';
import Lesson2 from './pages/Lesson3/Lesson3Topic2';
import Lesson3 from './pages/Lesson3';
import Lesson4 from './pages/Lesson4';
import Lesson5 from './pages/Lesson5';

function App() {
  return (
    <HashRouter>
      <div className="app-container">
        <MyNavbar />
        <div className="content-wrap">
          <Routes>
            <Route index path='/' element={<HomePage />} />
            <Route path='/Lessons' element={<Lessons />} />
            <Route path='/Lessons/Lesson1/Topic1' element={<Lesson1Topic1 />} />
            <Route path='/Lessons/Lesson2' element={<Lesson2 />} />
            <Route path='/Lessons/Lesson3' element={<Lesson3 />} />
            <Route path='/Lessons/Lesson4' element={<Lesson4 />} />
            <Route path='/Lessons/Lesson5' element={<Lesson5 />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
        </div>
        <MyFooter />
      </div>
    </HashRouter>
  );
}

export default App;