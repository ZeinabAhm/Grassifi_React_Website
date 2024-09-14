import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out Our Artificial Grass!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/5.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Simple'
              path='/services'
            />
            <CardItem
              src='images/2.jpeg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Simple'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Cozy'
              path='/services'
            />
            <CardItem
              src='images/4.jpeg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Luxury'
              path='/products'
            />
            <CardItem
              src='images/6.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Happiness'
              path='/sign-up'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
