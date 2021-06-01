import React from 'react';
import { Link } from 'react-router-dom';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/components/Login.scss';

const Login = () => {
  return (
    <section className='login__container'>
      <h2>Inicia sesión</h2>
      <form className='login__container--form'>
        <input className='input__login' type='text' placeholder='Correo' />
        <input
          className='input__login'
          type='password'
          placeholder='Constraseña'
        />
        <button type='button' className='button'>
          Iniciar sesión
        </button>
        <div className='login__container--remember-me'>
          <label>
            <input type='checkbox' id='cbox1' value='checkbox' />
            Recuérdame
          </label>
          <a href='/'>Olvidé mi contraseña</a>
        </div>
      </form>
      <section className='login__container--social-media'>
        <div>
          <img src={googleIcon} alt='Google' />
          &nbsp; Inicia Sesión con Google
        </div>
        <div>
          <img src={twitterIcon} alt='Twitter' />
          &nbsp;Inicia Sesión con Twitter
        </div>
      </section>
      <p className='login__container--register'>
        No tienes ninguna cuenta 
        <Link to='/register'>Regsitrate</Link>
      </p>
    </section>
  );
};

export default Login;
