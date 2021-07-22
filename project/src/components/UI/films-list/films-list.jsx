import React, {useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';

import FilmCard from '../film-card/film-card';
import filmCardProp from '../film-card/film-card.prop';

import {ALL_GENRES, TYPE_GENRE} from '../../../const';
import {setFilteredFilmsCount} from '../../../store/actions';
import {getActiveFilter, getDisplayedFilmsCount} from '../../../store/app-process/selectors';

function FilmsList({films}) {
  const activeFilter = useSelector(getActiveFilter);
  const displayedFilmsCount = useSelector(getDisplayedFilmsCount);

  const dispatch = useDispatch();

  const filterFilms = (allFilms, filter) => filter.type === TYPE_GENRE && filter.value === ALL_GENRES ? allFilms : allFilms.filter((film) => film[filter.type] === filter.value);

  const memoizedFilteredFilms = useMemo(() => filterFilms(films, activeFilter), [activeFilter.value]);

  useEffect(() => {
    dispatch(setFilteredFilmsCount(memoizedFilteredFilms.length));
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
  films: PropTypes.arrayOf(filmCardProp).isRequired,
};

export default FilmsList;
