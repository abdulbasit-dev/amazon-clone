import React, {useState} from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import {auth} from '../firebase'

import {makeStyles, easing} from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 350,
    backgroundColor: theme.palette.background.paper,
    border: '1px solid lightgray',
    boxShadow: theme.shadows[5],
  },
}))

function Login() {
  const history = useHistory()
  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')
  const [signUp, setSignUp] = useState({
    email: '',
    password: '',
    username: '',
  })

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
      .createUserWithEmailAndPassword(signUp.email, signUp.password)
      .then(auth => {
        //acount created , redirect to homepage
        auth.user.updateProfile({
          displayName: signUp.username,
        })
        history.push('/')
      })
      .catch(e => alert(e.message))
  }

  //modal requirement
  const classes = useStyles()
  const [modalStyle] = React.useState(getModalStyle)
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  //end modal state

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
        <button className='login__registerButton' onClick={handleOpen}>
          Create Your Amazon Acount
        </button>
      </div>

      {/* Modal Form */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <div style={modalStyle} className={classes.paper}>
          <div className='login__container'>
            <h1>Sign Up</h1>
            <form action=''>
              <h5>Username</h5>
              <input
                type='username'
                value={signUp.username}
                onChange={e => setSignUp({...signUp, username: e.target.value})}
              />
              <h5>Email</h5>
              <input
                type='email'
                value={signUp.email}
                onChange={e => setSignUp({...signUp, email: e.target.value})}
              />
              <h5>Password</h5>
              <input
                type='password'
                value={signUp.password}
                onChange={e => setSignUp({...signUp, password: e.target.value})}
              />

              <button type='submit' onClick={register} className='login__signInButton'>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Login
