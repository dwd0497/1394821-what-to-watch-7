import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {toggleFilmStatus} from '../../../store/api-actions';

function MyListButton({filmId, isFavorite, changeFilmStatus}) {

  const onMyListClick = (evt) => {
    evt.preventDefault();
    const status = isFavorite ? 0 : 1;

    changeFilmStatus({filmId, status});
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
  changeFilmStatus: PropTypes.func.isRequired,
};

const mapDispatchToState = (dispatch) => ({
  changeFilmStatus(filmData) {
    dispatch(toggleFilmStatus(filmData));
  },
});

export {MyListButton};
export default connect(null, mapDispatchToState)(MyListButton);
