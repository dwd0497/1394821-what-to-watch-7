import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import Logo from '../../UI/logo/logo';
import User from '../../UI/user/user';
import Footer from '../../UI/footer/footer';
import FilmsList from '../../UI/films-list/films-list';
import FilmsTabs from '../../UI/film-tabs/film-tabs';

import {AppRoute, AuthorizationStatus} from '../../../const';

import Loading from '../loading/loading';
import {fetchComments, fetchFilm, fetchSimilarFilmsList} from '../../../store/api-actions';
import MyListButton from '../../UI/my-list-button/my-list-button';
import {
  getComments,
  getFilm, getIsCommentsLoaded,
  getIsFilmLoaded,
  getIsSimilarFilmsLoaded,
  getSimilarFilms
} from '../../../store/app-data/selectors';
import {getAuthorizationStatus} from '../../../store/user/selectors';

function Film({match}) {
  const film = useSelector(getFilm);
  const isFilmLoaded = useSelector(getIsFilmLoaded);
  const similarFilms = useSelector(getSimilarFilms);
  const isSimilarFilmsLoaded = useSelector(getIsSimilarFilmsLoaded);
  const comments = useSelector(getComments);
  const isCommentsLoaded = useSelector(getIsCommentsLoaded);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const dispatch = useDispatch();

  const filmId = +match.params.id;

  useEffect(() => {
    dispatch(fetchFilm(filmId));
    dispatch(fetchComments(filmId));
    dispatch(fetchSimilarFilmsList(filmId));
  }, []);

  if (!isFilmLoaded || !isCommentsLoaded || !isSimilarFilmsLoaded) {
    return <Loading />;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
            <User />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`${AppRoute.PLAYER}/${filmId}`} className="btn btn--play film-card__button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </Link>
                <MyListButton filmId={filmId} isFavorite={film.isFavorite} />
                {authorizationStatus === AuthorizationStatus.AUTH && (
                  <Link to={`${AppRoute.FILMS}/${filmId}/review`} className="btn film-card__button">
                    Add review
                  </Link>)}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <FilmsTabs film={film} comments={comments} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={similarFilms}/>
        </section>

        <Footer />
      </div>
    </>
  );
}

Film.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Film;
