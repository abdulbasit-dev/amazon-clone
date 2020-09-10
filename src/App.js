import React, {useContext, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/Checkout'
import Login from './components/Login'
import {BasketContext, ACTIONS} from './StateProvider'
import {auth} from './firebase'

function App() {
  const [{user}, dispatch] = useContext(BasketContext)

  //useEffect
  //a piece of code which run, base on a given condition
  useEffect(() => {
    //create a listener, that listen if the user sign in or sign out
    const unSubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        //the user is logged in ......
        dispatch({type: ACTIONS.SET_USER, user: authUser})
      } else {
        //the user is logged out ......
        dispatch({type: ACTIONS.SET_USER, user: null})
      }
    })

    return () => {
      //Any clean up opreation go in here ....
      unSubscribe()
    }
  }, [])

  // console.log('USER IS >>>', user)

  return (
    <Router>
      {/* always make you app level (high level comppnents ) clean */}
      <div className='app'>
        <Switch>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
