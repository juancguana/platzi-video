import React from 'react';
import '../assets/styles/components/CarruselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarruselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className='carousel-item'>
    <img
      className='carousel-item__image'
      src={cover}
      alt={title}
    />
    <div className='carousel-item__details'>
      <div>
        <img src={playIcon} alt='Play icon' />
        <img src={plusIcon} alt='Plus Icon' />
      </div>
      <p className='carousel-item__details--title'>{title}</p>
      <p className='carousel-item__details--subtitle'>{`${year} ${contentRating} ${duration}`}</p>
    </div>
  </div>
);

export default CarruselItem;
