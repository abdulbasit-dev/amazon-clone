import React, {useState} from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import {auth} from '../firebase'

function Login() {
  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function login(e) {
    e.preventDefault()
    //firebase handle sign in
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        //logged in , redirect to homepage
        history.push('/')
      })
      .catch(e => alert(e.message))
  }

  function register(e) {
    e.preventDefault()
    //firebase handele create acount
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        //acount created , redirect to homepage
        history.push('/')
      })
      .catch(e => alert(e.message))
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
          alt='logo'
        />
      </Link>

      <div className='login__container'>
        <h1>Sign in</h1>
        <form action=''>
          <h5>Email</h5>
          <input type='email' value={email} onChange={e => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

          <button type='submit' onClick={login} className='login__signInButton'>
            Sign In
          </button>
        </form>
        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        <button className='login__registerButton' onClick={register}>
          Create Your Amazon Acount
        </button>
      </div>
    </div>
  )
}

export default Login
