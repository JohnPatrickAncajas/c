import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNavbar from './components/Navbar';
import MyFooter from './components/Footer';
import HomePage from './components/Homepage';

function App() {
  return (
    <div>
      <MyNavbar />
      <HomePage />
      <MyFooter />
    </div>
  );
}

export default App;
