import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import browserHistory from '../../../browser-history';

import Logo from '../../UI/logo/logo';
import User from '../../UI/user/user';
import AddReviewForm from '../../UI/add-review-form/add-review-form';

import {AppRoute} from '../../../const';

import filmCardProp from '../../UI/film-card/film-card.prop';
import {connect} from 'react-redux';
import {fetchFilm} from '../../../store/api-actions';
import PropTypes from 'prop-types';
import Loading from '../loading/loading';

function AddReview({film, loadFilm, isFilmLoaded}) {
  const filmId = browserHistory.location.pathname.split('/')[2];

  useEffect(() => {
    loadFilm(filmId);
  }, []);

  if (!isFilmLoaded) {
    return <Loading />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.FILMS}/${filmId}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__link">Add review</span>
              </li>
            </ul>
          </nav>

          <User />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm />
      </div>

    </section>
  );
}

AddReview.propTypes = {
  film: PropTypes.oneOfType([
    filmCardProp.isRequired,
    PropTypes.object.isRequired,
  ]),
  loadFilm: PropTypes.func.isRequired,
  isFilmLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  film: state.film,
  comments: state.comments,
  isFilmLoaded: state.isFilmLoaded,
});

const mapDispatchToState = (dispatch) => ({
  loadFilm(filmId) {
    dispatch(fetchFilm(filmId));
  },
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToState)(AddReview);
