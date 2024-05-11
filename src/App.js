import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

import MyNavbar from './components/Navbar';
import MyFooter from './components/Footer';

import HomePage from './pages/Homepage';
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
import Lesson4Topic1 from './pages/Lesson4/Lesson4Topic1';
import Lesson4Topic2 from './pages/Lesson4/Lesson4Topic3';
import Lesson4Topic3 from './pages/Lesson4/Lesson4Topic3';
import Lesson5Topic1 from './pages/Lesson5/Lesson5Topic1';
import Lesson5Topic2 from './pages/Lesson5/Lesson5Topic2';
import Lesson5Topic3 from './pages/Lesson5/Lesson5Topic3';
import Lesson5Topic4 from './pages/Lesson5/Lesson5Topic4';
import Lesson5Topic5 from './pages/Lesson5/Lesson5Topic5';
import Lesson5Topic6 from './pages/Lesson5/Lesson5Topic6';
import Lesson6Topic1 from './pages/Lesson6/Lesson6Topic1';
import Lesson6Topic2 from './pages/Lesson6/Lesson6Topic2';
import Lesson6Topic3 from './pages/Lesson6/Lesson6Topic3';
import Lesson6Topic4 from './pages/Lesson6/Lesson6Topic4';
import Lesson6Topic5 from './pages/Lesson6/Lesson6Topic5';
import Lesson6Topic6 from './pages/Lesson6/Lesson6Topic6';
import Lesson6Topic7 from './pages/Lesson6/Lesson6Topic7';


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
            <Route path='/Lessons/Lesson4/Topic1' element={<Lesson4Topic1 />} />
            <Route path='/Lessons/Lesson4/Topic2' element={<Lesson4Topic2 />} />
            <Route path='/Lessons/Lesson4/Topic3' element={<Lesson4Topic3 />} />
            <Route path='/Lessons/Lesson5/Topic1' element={<Lesson5Topic1 />} />
            <Route path='/Lessons/Lesson5/Topic2' element={<Lesson5Topic2 />} />
            <Route path='/Lessons/Lesson5/Topic3' element={<Lesson5Topic3 />} />
            <Route path='/Lessons/Lesson5/Topic4' element={<Lesson5Topic4 />} />
            <Route path='/Lessons/Lesson5/Topic5' element={<Lesson5Topic5 />} />
            <Route path='/Lessons/Lesson5/Topic6' element={<Lesson5Topic6 />} />
            <Route path='/Lessons/Lesson6/Topic1' element={<Lesson6Topic1 />} />
            <Route path='/Lessons/Lesson6/Topic2' element={<Lesson6Topic2 />} />
            <Route path='/Lessons/Lesson6/Topic3' element={<Lesson6Topic3 />} />
            <Route path='/Lessons/Lesson6/Topic4' element={<Lesson6Topic4 />} />
            <Route path='/Lessons/Lesson6/Topic5' element={<Lesson6Topic5 />} />
            <Route path='/Lessons/Lesson6/Topic6' element={<Lesson6Topic6 />} />
            <Route path='/Lessons/Lesson6/Topic7' element={<Lesson6Topic7 />} />
          </Routes>
        </div>
        <MyFooter />
      </div>
    </HashRouter>
  );
}

export default App;