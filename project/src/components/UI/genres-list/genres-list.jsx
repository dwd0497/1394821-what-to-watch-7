import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../../store/actions';

import filmCardProp from '../../UI/film-card/film-card.prop';

import {ALL_GENRES} from '../../../const';

function GenresList(props) {
  const {activeGenreFilter, films, onFilterChange} = props;

  const genresList = [ALL_GENRES];

  const filmsGenres = Object.values(films.reduce((genres, film) => (genres[film.genre] = film.genre, genres), {}));

  genresList.push(...filmsGenres);

  const onGenreClick = (evt) => {
    evt.preventDefault();
    onFilterChange(evt.target.id);
  };

  return (
    <ul className="catalog__genres-list">
      {genresList.map((genre) => (
        <li className={activeGenreFilter === genre ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'} key={genre}>
          <span className="catalog__genres-link" onClick={onGenreClick} id={genre}>{genre}</span>
        </li>
      ))}
    </ul>
  );
}

GenresList.propTypes = {
  films: PropTypes.arrayOf(filmCardProp).isRequired,
  activeGenreFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
  activeGenreFilter: state.activeGenreFilter,
});

const mapDispatchToProps = (dispatch) => ({
  onFilterChange(genre) {
    dispatch(ActionCreator.changeActiveGenreFilter(genre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
