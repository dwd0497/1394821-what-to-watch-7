import React from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

import {toggleFilmStatus} from '../../../store/api-actions';

function MyListButton({filmId, isFavorite, isPromo = false}) {
  const dispatch = useDispatch();

  const onMyListClick = (evt) => {
    evt.preventDefault();
    const status = isFavorite ? 0 : 1;
    dispatch(toggleFilmStatus({filmId, status, isPromo}));
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={onMyListClick}>
      {isFavorite
        ? (
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#in-list" />
          </svg>)
        : (
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add" />
          </svg>)}
      <span>My list</span>
    </button>
  );
}

MyListButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  filmId: PropTypes.number.isRequired,
  isPromo: PropTypes.bool,
};

export default MyListButton;
