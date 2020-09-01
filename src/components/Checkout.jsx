import React, {useContext} from 'react'
import {BasketContext} from '../StateProvider'
import './Checkout.css'
import CheckoutBasket from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {
  const [{basket}] = useContext(BasketContext)

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          className='checkout__ad'
          alt=''
        />
        {basket.length === 0 ? (
          <div>
            <h2>YourShoping Basket is empty</h2>
            <p>
              you have no item in your basket, to buy one or more items, click "Add to basket" next
              to the item
            </p>
          </div>
        ) : (
          <div>
            <h2 className='checkout__title'>Your Shoping Basket</h2>
            {basket.map(item => (
              <CheckoutBasket item={item} key={item.id} />
            ))}
          </div>
        )}
      </div>

      {basket.length > 0 && (
        <div className='checkout__right'>
          <Subtotal />
        </div>
      )}
    </div>
  )
}

export default Checkout
