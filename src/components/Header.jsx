import React from 'react';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <header className='header'>
    <img
      className='header__img'
      src='https://i.postimg.cc/K8qB6bTd/logo-video.png'
      alt='Logo de un video'
    />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img
          src='https://i.postimg.cc/QNQ5X15g/user-icon.png'
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
