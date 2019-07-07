import React from 'react';
import logo from './logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className='Header'>
      <img src={logo} alt='' className='Header-logo' />
      <h1 style={{ color: 'white' }}>Header</h1>
    </div>
  );
};
export default Header;
