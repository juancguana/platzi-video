import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => (
  <header className='header'>
    <img
      className='header__img'
      src={logo}
      alt='Logo de un video'
    />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img
          src={userIcon}
          alt='Icono de usuario'
        />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <a href='/'>Cuenta</a>
        </li>
        <li>
          <a href='/'>Salir</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
