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
import filmCardProp from '../../UI/film-card/film-card.prop';
import MyListButton from '../../UI/my-list-button/my-list-button';

function Main({promoFilm, changeActiveFilter, setDisplayedFilmsCount, films }) {
  const {name, genre, released, backgroundImage, posterImage, id, isFavorite} = promoFilm;

  useEffect(() => {
    changeActiveFilter({type: TYPE_GENRE, value: ALL_GENRES});
    setDisplayedFilmsCount(FILMS_COUNT);
  }, []);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={promoFilm} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <Logo />
          <User />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={AppRoute.PLAYER} className="btn btn--play film-card__button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </Link>
                <MyListButton filmId={id} isFavorite={isFavorite} isPromo />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />

          <FilmsList films={films}/>

          <ShowMore />

        </section>

        <Footer />
      </div>
    </>
  );
}

Main.propTypes = {
  promoFilm: filmCardProp.isRequired,
  films: PropTypes.arrayOf(filmCardProp).isRequired,
  changeActiveFilter: PropTypes.func.isRequired,
  setDisplayedFilmsCount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
  promoFilm: state.promoFilm,
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

