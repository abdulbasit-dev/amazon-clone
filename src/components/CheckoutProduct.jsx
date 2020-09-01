import React, {useContext} from 'react'
import './CheckoutProduct.css'
import {BasketContext, ACTIONS} from '../StateProvider'

function CheckoutProduct({item}) {
  const {id, title, image, price, rating} = item
  const [, dispatch] = useContext(BasketContext)

  function remveFromBasket() {
    dispatch({type: ACTIONS.REMOVE_FROM_BASKET, id})
  }

  return (
    <div className='checkoutProduct'>
      <img src={image} alt='' className='checkoutProduct__image' />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className='checkoutProduct__rating'>
          {Array(rating)
            .fill()
            .map((index, i) => (
              <span role='img' aria-label='' key={i}>
                ⭐
              </span>
            ))}
        </div>
        <button onClick={remveFromBasket}>Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
