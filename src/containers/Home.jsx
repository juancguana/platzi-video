import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carrusel from '../components/Carrucel';
import CarruselItem from '../components/CarruselItem';
import Header from '../components/Header';


const Home = ({ mylist, trends, originals }) => {
  return (
    <>
      <Header />
      <Search />
      {mylist.length > 0 && (
        <Categories title='Mi Lista'>
          <Carrusel>
            {mylist.map((item) => (
              <CarruselItem key={item.id} {...item} isList />
            ))}
          </Carrusel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carrusel>
          {trends.map((item) => (
            <CarruselItem key={item.id} {...item} />
          ))}
        </Carrusel>
      </Categories>
      <Categories title='Originales'>
        <Carrusel>
          {originals.map((item) => (
            <CarruselItem key={item.id} {...item} />
          ))}
        </Carrusel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
