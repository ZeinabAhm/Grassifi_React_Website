import React from 'react'
import { Link } from 'react-router-dom';

function Product_item(props) {
  return (
    <>
      <li className='product__item'>
        <Link className='product__item__link' to={props.path}>
          <figure className='product__item__pic-wrap' data-category={props.label}>
            <img
              className='product__item__img'
              alt='Product Image'
              src={props.src}
            />
          </figure>
          <div className='product__item__info'>
            <h5 className='product__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    
    </>
  )
}

export default Product_item
