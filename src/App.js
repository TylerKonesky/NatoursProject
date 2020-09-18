import React from 'react';
import './App.css';
import Header from './Components/header';
import About from './Components/about';
import Tours from './Components/tours';
import Booking from './Components/booking';
import Stories from './Components/stories';
import BookTour from './Components/bookTour';
import Footer from './Components/footer';
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
        <Stories />
        <BookTour />
        <Footer />
    </div>
  );
}

export default App;
