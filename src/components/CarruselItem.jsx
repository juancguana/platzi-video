import React from 'react';
import '../assets/styles/components/CarruselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarruselItem = ({ children }) => (
  <div className='carousel-item'>
    <img
      className='carousel-item__image'
      src='https://images.pexels.com/photos/3526020/pexels-photo-3526020.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
      alt='Chuwaca'
    />
    <div className='carousel-item__details'>
      <div>
        <img src={playIcon} alt='Play icon' />
        <img src={plusIcon} alt='Plus Icon' />
      </div>
      <p className='carousel-item__details--title'>Titulo descriptivo</p>
      <p className='carousel-item__details--subtitle'>2019 16+ 114 minutos</p>
    </div>
  </div>
);

export default CarruselItem;
