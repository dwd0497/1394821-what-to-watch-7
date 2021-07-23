import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import browserHistory from '../../../browser-history';

import Logo from '../../UI/logo/logo';
import User from '../../UI/user/user';
import AddReviewForm from '../../UI/add-review-form/add-review-form';
import Loading from '../loading/loading';

import {AppRoute} from '../../../const';
import {fetchFilm} from '../../../store/api-actions';
import {getFilm, getIsFilmLoaded} from '../../../store/app-data/selectors';
import {useDispatch, useSelector} from 'react-redux';

function AddReview() {
  const filmId = +browserHistory.location.pathname.split('/')[2];

  const film = useSelector(getFilm);
  const isFilmLoaded = useSelector(getIsFilmLoaded);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilm(filmId));
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
        <AddReviewForm filmId={filmId} />
      </div>

    </section>
  );
}

export default AddReview;
