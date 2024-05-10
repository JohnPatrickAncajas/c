import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

import MyNavbar from './components/Navbar';
import HomePage from './pages/Homepage';
import MyFooter from './components/Footer';

import Lessons from './pages/Lessons';
import Lesson1Topic1 from './pages/Lesson1/Lesson1Topic1';
import Lesson1Topic2 from './pages/Lesson1/Lesson1Topic2';
import Lesson1Topic3 from './pages/Lesson1/Lesson1Topic3';
import Lesson1Topic4 from './pages/Lesson1/Lesson1Topic4';
import Lesson1Topic5 from './pages/Lesson1/Lesson1Topic5';
import Lesson2Topic1 from './pages/Lesson2/Lesson2Topic1';
import Lesson2Topic2 from './pages/Lesson2/Lesson2Topic2';
import Lesson2Topic3 from './pages/Lesson2/Lesson2Topic3';
import Lesson2Topic4 from './pages/Lesson2/Lesson2Topic4';
import Lesson3Topic1 from './pages/Lesson3/Lesson3Topic1';
import Lesson3Topic2 from './pages/Lesson3/Lesson3Topic2';

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
            <Route path='/Lessons/Lesson1/Topic2' element={<Lesson1Topic2 />} />
            <Route path='/Lessons/Lesson1/Topic3' element={<Lesson1Topic3 />} />
            <Route path='/Lessons/Lesson1/Topic4' element={<Lesson1Topic4 />} />
            <Route path='/Lessons/Lesson1/Topic5' element={<Lesson1Topic5 />} />
            <Route path='/Lessons/Lesson2/Topic1' element={<Lesson2Topic1 />} />
            <Route path='/Lessons/Lesson2/Topic2' element={<Lesson2Topic2 />} />
            <Route path='/Lessons/Lesson2/Topic3' element={<Lesson2Topic3 />} />
            <Route path='/Lessons/Lesson2/Topic4' element={<Lesson2Topic4 />} />
            <Route path='/Lessons/Lesson3/Topic1' element={<Lesson3Topic1 />} />
            <Route path='/Lessons/Lesson3/Topic2' element={<Lesson3Topic2 />} />
          </Routes>
        </div>
        <MyFooter />
      </div>
    </HashRouter>
  );
}

export default App;