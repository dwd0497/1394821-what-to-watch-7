import React, {useEffect, useMemo} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import FilmCard from '../film-card/film-card';

import filmCardProp from '../film-card/film-card.prop';

import {ALL_GENRES, TYPE_GENRE} from '../../../const';
import {ActionCreator} from '../../../store/actions';

function FilmsList({films, activeFilter, displayedFilmsCount, setFilteredFilmsCount}) {
  const filterFilms = (allFilms, filter) => filter.type === TYPE_GENRE && filter.value === ALL_GENRES ? allFilms : allFilms.filter((film) => film[filter.type] === filter.value);

  const memoizedFilteredFilms = useMemo(() => filterFilms(films, activeFilter), [activeFilter.value]);

  useEffect(() => {
    setFilteredFilmsCount(memoizedFilteredFilms.length);
  }, [films, activeFilter]);

  return (
    <div className="catalog__films-list">
      {memoizedFilteredFilms.slice(0, displayedFilmsCount).map((film) => (
        <FilmCard
          key={film.id}
          film={film}
        />
      ))}
    </div>
  );
}

FilmsList.propTypes = {
  displayedFilmsCount: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(filmCardProp).isRequired,
  activeFilter: PropTypes.shape({
    type: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  }).isRequired,
  setFilteredFilmsCount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeFilter: state.activeFilter,
  displayedFilmsCount: state.displayedFilmsCount,
});

const mapDispatchToState = (dispatch) => ({
  setFilteredFilmsCount(count) {
    dispatch(ActionCreator.setFilteredFilmsCount(count));
  },
});

export {FilmsList};
export default connect(mapStateToProps, mapDispatchToState)(FilmsList);
