import './Header.css';
import React from 'react';
import logo from '../../assets/react.svg';
import item from './helper/data'


const Header = () => {
  return (
    <div className='container'>
        <img src={logo} alt="" className="logo" />
      
    </div>
  )
}

export default Header
