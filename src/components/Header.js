import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <>
      <div className='header-p'>
        <h2 className='heading-profile'>
          <FaUserAlt className='personIcon' />
          Pushpak Hurpade
        </h2>
      </div>
      <img
        className='backgroundImage--1'
        src='img/background.jpg'
        alt='backgroundImage'
      />
    </>
  );
};

export default Header;
