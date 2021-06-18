import React, {useState} from 'react';
import PropTypes from 'prop-types';

import FilmCard from '../film-card/film-card';

import filmCardProp from '../film-card/film-card.prop';

function FilmsList({films, filmsCount}) {
  const [, setActiveFilmId] = useState(null);
  const [renderedFilms] = useState(films.slice(0, filmsCount));

  return (
    <div className="catalog__films-list">
      {renderedFilms.map((film) => (
        <FilmCard
          key={film.id}
          film={film}
          onMouseEnter={() => setActiveFilmId(film.id)}
          onMouseLeave={() => setActiveFilmId(null)}
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
