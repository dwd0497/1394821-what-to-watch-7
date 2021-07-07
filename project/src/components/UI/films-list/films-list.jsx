import React from 'react';
import PropTypes from 'prop-types';

import FilmCard from '../film-card/film-card';

import filmCardProp from '../film-card/film-card.prop';

function FilmsList(props) {
  const {films, filmsCount} = props;

  return (
    <div className="catalog__films-list">
      {films.slice(0, filmsCount).map((film) => (
        <FilmCard
          key={film.id}
          film={film}
        />
      ))}
    </div>
  );
}

FilmsList.propTypes = {
  filmsCount: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(filmCardProp).isRequired,
};


export default FilmsList;
