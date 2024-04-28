import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/Navbar';
import HomePage from './components/Homepage';
import MyFooter from './components/Footer';
import Lesson1 from './pages/Lesson1';
import Lesson2 from './pages/Lesson2';
import Lesson3 from './pages/Lesson3';
import Lesson4 from './pages/Lesson4';
import Lesson5 from './pages/Lesson5';

function App() {
  return (
    <div>
      <MyNavbar />
        <Routes>
            <Route path="/c" exact element={<HomePage />} />
            <Route path="/lesson1" element={<Lesson1 />} />
            <Route path="/lesson2" element={<Lesson2 />} />
            <Route path="/lesson3" element={<Lesson3 />} />
            <Route path="/lesson4" element={<Lesson4 />} />
            <Route path="/lesson5" element={<Lesson5 />} />
        </Routes>
      <MyFooter />
    </div>
  );
}

export default App;
