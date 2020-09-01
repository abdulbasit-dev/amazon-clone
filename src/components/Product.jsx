import React, {useContext} from 'react'
import './Product.css'
import {BasketContext, ACTIONS} from '../StateProvider'

function Product({id, title, image, price, rating}) {
  const [state, dispatch] = useContext(BasketContext)

  function addToBasket() {
    dispatch({type: ACTIONS.ADD_TO_BASKET, payload: {item: {id, title, image, price, rating}}})
  }

  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((index, i) => (
              <span role='img' aria-label='' key={i}>
                ⭐
              </span>
            ))}
        </div>
      </div>
      <img src={image} alt='' />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product
