import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Logo from '../../UI/logo/logo';
import User from '../../UI/user/user';
import Footer from '../../UI/footer/footer';
import FilmsList from '../../UI/films-list/films-list';
import GenresList from '../../UI/genres-list/genres-list';
import ShowMore from '../../UI/show-more/show-more';

import {AppRoute, ALL_GENRES, TYPE_GENRE, FILMS_COUNT} from '../../../const';
import {ActionCreator} from '../../../store/actions';

function Main({promoFilm, changeActiveFilter, setDisplayedFilmsCount}) {
  const {title, genre, date} = promoFilm;

  useEffect(() => {
    changeActiveFilter({type: TYPE_GENRE, value: ALL_GENRES});
    setDisplayedFilmsCount(FILMS_COUNT);
  }, []);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <Logo />
          <User />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{date}</span>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />

          <FilmsList />

          <ShowMore />

        </section>

        <Footer />
      </div>
    </>
  );
}

Main.propTypes = {
  promoFilm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  changeActiveFilter: PropTypes.func.isRequired,
  setDisplayedFilmsCount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
});

const mapDispatchToState = (dispatch) => ({
  changeActiveFilter(filter) {
    dispatch(ActionCreator.changeActiveFilter(filter));
  },
  setDisplayedFilmsCount(count) {
    dispatch(ActionCreator.setDisplayedFilmsCount(count));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToState)(Main);

