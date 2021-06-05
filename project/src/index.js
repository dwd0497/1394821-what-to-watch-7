import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const promoFilm = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  date: '2014',
};

const FILMS_COUNT = 20;

ReactDOM.render(
  <React.StrictMode>
    <App promoFilm={promoFilm} filmsCount={FILMS_COUNT} />
  </React.StrictMode>,
  document.getElementById('root'));
