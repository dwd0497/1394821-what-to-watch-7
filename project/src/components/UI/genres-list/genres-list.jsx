import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {changeActiveFilter} from '../../../store/actions';

import {ALL_GENRES, TYPE_GENRE} from '../../../const';
import {getFilms} from '../../../store/app-data/selectors';
import {getActiveFilter} from '../../../store/app-process/selectors';

function GenresList() {
  const films = useSelector(getFilms);
  const activeFilter = useSelector(getActiveFilter);

  const dispatch = useDispatch();

  const genresList = [ALL_GENRES];

  const filmsGenres = Object.values(films.reduce((genres, film) => (genres[film.genre] = film.genre, genres), {}));

  genresList.push(...filmsGenres);

  const onGenreClick = (evt) => {
    dispatch(changeActiveFilter({type: TYPE_GENRE, value: evt.target.id}));
  };

  return (
    <ul className="catalog__genres-list">
      {genresList.map((genre) => (
        <li className={activeFilter.value === genre ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'} key={genre}>
          <span className="catalog__genres-link" onClick={onGenreClick} id={genre}>{genre}</span>
        </li>
      ))}
    </ul>
  );
}

export default GenresList;
