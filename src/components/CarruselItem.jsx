import React from 'react';
import '../assets/styles/components/CarruselItem.scss';

const CarruselItem = ({ children }) => (
  <div className='carousel-item'>
    <img
      className='carousel-item__image'
      src='https://images.pexels.com/photos/3526020/pexels-photo-3526020.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
      alt='Chuwaca'
    />
    <div className='carousel-item__details'>
      <div>
        <img src='https://img.icons8.com/flat_round/64/000000/play--v1.png' alt='Imagen' />
        <img src='https://img.icons8.com/ios-filled/50/26e07f/heart-plus.png' alt='Imagen' />
      </div>
      <p className='carousel-item__details--title'>Titulo descriptivo</p>
      <p className='carousel-item__details--subtitle'>2019 16+ 114 minutos</p>
    </div>
  </div>
);

export default CarruselItem;
