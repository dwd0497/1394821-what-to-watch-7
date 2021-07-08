import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import FilmCard from '../film-card/film-card';

import filmCardProp from '../film-card/film-card.prop';

import {ALL_GENRES, TYPE_GENRE} from '../../../const';


function FilmsList({filmsCount, films, activeFilter}) {

  const filterFn = (allfilms, filter) => filter.type === TYPE_GENRE && filter.value === ALL_GENRES ? allfilms : allfilms.filter((film) => film[filter.type] === filter.value);

  return (
    <div className="catalog__films-list">
      {filterFn(films, activeFilter).slice(0, filmsCount).map((film) => (
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
  activeFilter: PropTypes.shape({
    type: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
  activeFilter: state.activeFilter,
});

export {FilmsList};
export default connect(mapStateToProps, null)(FilmsList);
