import React from 'react'
import './Header.css'
import {SearchIcon} from '@material-ui/icons'

function Header() {
  return (
    <nav className='header'>
      <img
        className='header__logo'
        src={'http://pngimg.com/uploads/amazon/amazon_PNG11.png'}
        alt=''
      />
      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>
    </nav>
  )
}

export default Header
