import React from 'react';
import './App.css';
import Header from './Components/header';
import About from './Components/about';
import Tours from './Components/tours';
import Booking from './Components/booking';
import './css/style.css';
import './css/icon-font.css';

function App() {
  return (
    <div>
        <Header />
        {/* <Grids /> */}
        <About />
        <Tours />
        <Booking />
    </div>
  );
}

export default App;
