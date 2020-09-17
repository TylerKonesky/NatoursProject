import React from 'react';
import './App.css';
import Header from './Components/header';
import Grids from './Components/gridStuff'
import About from './Components/about';
import Tours from './Components/tours';
import './css/style.css';
import './css/icon-font.css';

function App() {
  return (
    <div>
        <Header />
        {/* <Grids /> */}
        <About />
        <Tours />
    </div>
  );
}

export default App;
