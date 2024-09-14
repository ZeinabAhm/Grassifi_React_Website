import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import About from './components/pages/About';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/services'  Component={Services}/>
          <Route path='/products'  Component={Products}/>
          <Route path='/about'  Component={About}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
