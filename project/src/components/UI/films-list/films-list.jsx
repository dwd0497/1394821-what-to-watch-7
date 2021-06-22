import React from 'react';
import PropTypes from 'prop-types';

import FilmCard from '../film-card/film-card';

import filmCardProp from '../film-card/film-card.prop';

function FilmsList({films, renderFilmsCount}) {

  return (
    <div className="catalog__films-list">
      {films.slice(0, renderFilmsCount).map((film) => (
        <FilmCard
          key={film.id}
          film={film}
        />
      ))}
    </div>
  );
}

FilmsList.propTypes = {
  renderFilmsCount: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(filmCardProp).isRequired,
};

export default FilmsList;
