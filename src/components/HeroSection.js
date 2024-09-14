import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
<video src='/video/video-2.mp4' autoPlay loop muted />
<h1> Artificial Grass</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          About Grassfi
        </Button>
      
      </div>
    </div>
  );
}

export default HeroSection;
