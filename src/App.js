import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/login' />
          <Route path='/checkout' />
          <Route path='/' />
        </Switch>
      </div>
    </Router>
  )
}

export default App
