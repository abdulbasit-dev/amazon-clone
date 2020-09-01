import React, {useContext} from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {Link} from 'react-router-dom'
import {BasketContext} from '../StateProvider'
import {auth} from '../firebase'

function Header() {
  const [{basket, user}] = useContext(BasketContext)

  function logout() {
    console.log('logout run')
    if (user) auth.signOut()
  }

  return (
    <nav className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          src={'http://pngimg.com/uploads/amazon/amazon_PNG11.png'}
          alt=''
        />
      </Link>
      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>

      <div className='header__nav'>
        <Link to={!user && '/login'} className='header__link'>
          <div className='header__option' onClick={logout}>
            <span className='header__optionLineOne'>Hello {user?.email}</span>
            <span className='header__optionLineTwo'>{user ? 'Sign out' : 'Sign in'}</span>
          </div>
        </Link>
        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>
        </Link>
        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>
        </Link>

        {/* basket icon */}
        <Link to='/checkout' className='header__link'>
          <div className='header__optionBasket'>
            <ShoppingBasketIcon />
            <span className='header__optionLineTwo header__basketCounter'>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header
