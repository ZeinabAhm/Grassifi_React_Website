import React from 'react'
import Product_item from './Product_item';
import './Product.css';
function Product() {
  return (

          <div className='product'>
      <h1>Check out Our New Collection!</h1>
      <div className='products__container'>
        <div className='products__wrapper'>
          <ul className='products__items'>
            <Product_item
              src='images/5.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='12$ Per meter'
              path='/services'
            />
            <Product_item
              src='images/6.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='11$ Per meter'
              path='/services'
            />   <Product_item
            src='images/4.jpeg'
            text='Travel through the Islands of Bali in a Private Cruise'
            label='13$ Per meter'
            path='/services'
          />
          
            
          </ul>
          <ul className='products__items'>
            <Product_item
              src='images/3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='15$ Per meter'
              path='/services'
            />
            <Product_item
              src='images/2.jpeg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='12$ Per meter'
              path='/products'
            />
            <Product_item
              src='images/1.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='12$ Per meter'
              path='/sign-up'
            />
            
          </ul>
          <ul className='products__items'>
            <Product_item
              src='images/3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='12$ Per meter'
              path='/services'
            />
            <Product_item
              src='images/4.jpeg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='12$ Per meter'
              path='/products'
            />
            <Product_item
              src='images/6.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='12$ Per meter'
              path='/sign-up'
            />
            
          </ul>
        </div>
      </div>
    </div>
    
  )
}

export default Product
