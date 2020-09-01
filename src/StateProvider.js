//we need this to track the basket
import React, {createContext, useReducer} from 'react'

export const ACTIONS = {
  ADD_TO_BASKET: 'add_to_basket',
  REMOVE_FROM_BASKET: 'remove_from_basket',
  SET_USER: 'set_user',
}

const initialState = {
  basket: [],
  user: null,
}

function reducer(state, action) {
  console.log(action)
  switch (action.type) {
    case ACTIONS.ADD_TO_BASKET:
      return {...state, basket: [...state.basket, action.payload.item]}
    case ACTIONS.REMOVE_FROM_BASKET:
      return {...state, basket: state.basket.filter(item => item.id !== action.id)}
    case ACTIONS.SET_USER:
      return {...state, user: action.user}
    default:
      return state
  }
}

export const BasketContext = createContext()

function BasketProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <BasketContext.Provider value={[state, dispatch]}>{props.children}</BasketContext.Provider>
}

export default BasketProvider
