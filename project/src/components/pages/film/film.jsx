import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Logo from '../../UI/logo/logo';
import User from '../../UI/user/user';
import Footer from '../../UI/footer/footer';
import FilmsList from '../../UI/films-list/films-list';
import FilmsTabs from '../../UI/film-tabs/film-tabs';

import {AppRoute, FILMS_COUNT, TYPE_GENRE} from '../../../const';

import filmCardProp from '../../UI/film-card/film-card.prop';
import filmCommentProp from '../../UI/film-tabs/film-comment.prop';
import {ActionCreator} from '../../../store/actions';

function Film({film, comments, changeActiveFilter, setDisplayedFilmsCount}) {

  useEffect(() => {
    changeActiveFilter({type: TYPE_GENRE, value: film.genre});
    setDisplayedFilmsCount(FILMS_COUNT);
  }, []);

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
                <Link to={AppRoute.PLAYER} className="btn btn--play film-card__button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={AppRoute.ADD_REVIEW} className="btn film-card__button">Add review</Link>
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

          <FilmsList />
        </section>

        <Footer />
      </div>
    </>
  );
}

Film.propTypes = {
  film: filmCardProp.isRequired,
  comments: PropTypes.arrayOf(filmCommentProp).isRequired,
  changeActiveFilter: PropTypes.func.isRequired,
  setDisplayedFilmsCount: PropTypes.func.isRequired,
};

const mapDispatchToState = (dispatch) => ({
  changeActiveFilter(filter) {
    dispatch(ActionCreator.changeActiveFilter(filter));
  },
  setDisplayedFilmsCount(count) {
    dispatch(ActionCreator.setDisplayedFilmsCount(count));
  },
});

export {Film};
export default connect(null, mapDispatchToState)(Film);
