import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Logo from '../../UI/logo/logo';
import User from '../../UI/user/user';
import Footer from '../../UI/footer/footer';
import FilmsList from '../../UI/films-list/films-list';
import GenresList from '../../UI/genres-list/genres-list';

import {AppRoute, ALL_GENRES, TYPE_GENRE} from '../../../const';
import {ActionCreator} from '../../../store/actions';

import filmCardProp from '../../UI/film-card/film-card.prop';

function Main({promoFilm, filmsCount, films, changeActiveFilter}) {
  const {title, genre, date} = promoFilm;
  const [renderFilmsCount, setRenderFilmsCount] = useState(filmsCount);
  const [isShowMoreRender, setIsShowMoreRender] = useState(true);

  useEffect(() => {
    changeActiveFilter({type: TYPE_GENRE, value: ALL_GENRES});
  }, []);

  useEffect(() => {
    if (renderFilmsCount >= films.length) {
      setIsShowMoreRender(false);
    }
  }, [renderFilmsCount]);

  const onShowMoreClick = () => {
    if (renderFilmsCount < films.length) {
      setRenderFilmsCount((prevCount) => prevCount + 4);
    }
  };

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

          <FilmsList filmsCount={renderFilmsCount} />

          {isShowMoreRender && (
            <div className="catalog__more">
              <button className="catalog__button" type="button" onClick={onShowMoreClick}>Show more</button>
            </div>
          )}

        </section>

        <Footer />
      </div>
    </>
  );
}

Main.propTypes = {
  filmsCount: PropTypes.number.isRequired,
  promoFilm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  films: PropTypes.arrayOf(filmCardProp).isRequired,
  changeActiveFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
});

const mapDispatchToState = (dispatch) => ({
  changeActiveFilter(filter) {
    dispatch(ActionCreator.changeActiveFilter(filter));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToState)(Main);

