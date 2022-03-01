import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/dvt-logo.png';
import './style.css';

const Navbar = () => {
  return (
    <div>
      <header>
        <div className='container'>
          <div className='logo'>
            <Link to='/'>
              <img src={logo} alt='Logo' />
            </Link>
          </div>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/music'>Music</Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
