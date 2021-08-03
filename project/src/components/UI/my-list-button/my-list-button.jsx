import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';

import {toggleFilmStatus} from '../../../store/api-actions';
import {getAuthorizationStatus} from '../../../store/user/selectors';
import {AppRoute, AuthorizationStatus} from '../../../const';
import {redirectToRoure} from '../../../store/actions';

function MyListButton({filmId, isFavorite}) {
  const dispatch = useDispatch();
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const onMyListClick = (evt) => {
    evt.preventDefault();
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      const status = isFavorite ? 0 : 1;
      dispatch(toggleFilmStatus({filmId, status}));
    } else {
      dispatch(redirectToRoure(AppRoute.LOGIN));
    }
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
};

export default MyListButton;
