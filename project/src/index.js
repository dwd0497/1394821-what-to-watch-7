import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import films from './mocks/films';
import comments from './mocks/comments';
import {reducer} from './store/reducer';

const promoFilm = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  date: '2014',
};

// Временно уменьшил кол-во фильмов, чтоб тестить кнопку ShowMore, потом вернуть 20
const FILMS_COUNT = 4;

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App promoFilm={promoFilm} filmsCount={FILMS_COUNT} films={films} comments={comments} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
