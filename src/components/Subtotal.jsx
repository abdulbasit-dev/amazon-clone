import React, {useContext} from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css'
import {BasketContext} from '../StateProvider'

function Subtotal() {
  const [{basket}] = useContext(BasketContext)

  //this function sum of all item price in the basket
  function getBasketTotal() {
    return basket.reduce((acc, curr) => acc + curr.price, 0)
  }

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={value => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>{' '}
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This order contain a gift
            </small>
          </>
        )}
        value={getBasketTotal()}
        decimalScale={2}
        thousandSpacing={'3'}
        displayType={'text'}
        prefix={'$'}
      />
      <button>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal
