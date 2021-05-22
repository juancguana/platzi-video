import React from 'react';
import Header from '../components/Header';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carrusel from '../components/Carrucel';
import CarruselItem from '../components/CarruselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const videos = useInitialState(API);

  return (
    <div className='App'>
      <Header />
      <Search />
      {videos.mylist.length > 0 && (
        <Categories title='Mi Lista'>
          <Carrusel>
            {videos.mylist.map((item) => (
              <CarruselItem key={item.id} {...item} />
            ))}
          </Carrusel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carrusel>
          {videos.trends.map((item) => (
            <CarruselItem key={item.id} {...item} />
          ))}
        </Carrusel>
      </Categories>
      <Categories title='Originales'>
        <Carrusel>
          {videos.originals.map((item) => (
            <CarruselItem key={item.id} {...item} />
          ))}
        </Carrusel>
      </Categories>
      <Footer />
    </div>
  );
};
export default App;
