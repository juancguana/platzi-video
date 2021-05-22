import React from 'react';
import Header from '../components/Header';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carrusel from '../components/Carrucel';
import CarruselItem from '../components/CarruselItem';
import Footer from '../components/Footer';

const App = () => (
  <div className='App'>
    <Header />
    <Search />
    <Categories>
      <Carrusel>
        <CarruselItem />
        <CarruselItem />
        <CarruselItem />
        <CarruselItem />
      </Carrusel>
    </Categories>
    <Footer />
  </div>
);

export default App;
