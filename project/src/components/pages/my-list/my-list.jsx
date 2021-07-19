import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Logo from '../../UI/logo/logo';
import User from '../../UI/user/user';
import Footer from '../../UI/footer/footer';
import FilmsList from '../../UI/films-list/films-list';

import {ActionCreator} from '../../../store/actions';
import {fetchFavoriteFilms} from '../../../store/api-actions';
import filmCardProp from '../../UI/film-card/film-card.prop';
import Loading from '../loading/loading';

function MyList({changeActiveFilter, loadFavoriteFilms, favoriteFilms, isFavoriteFilmsLoaded}) {

  useEffect(() => {
    loadFavoriteFilms();
    changeActiveFilter({type: 'isFavorite', value: true});
  }, []);

  if (!isFavoriteFilmsLoaded) {
    return <Loading />;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <User />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={favoriteFilms} />
      </section>

      <Footer />
    </div>
  );
}

MyList.propTypes = {
  isFavoriteFilmsLoaded: PropTypes.bool.isRequired,
  changeActiveFilter: PropTypes.func.isRequired,
  loadFavoriteFilms: PropTypes.func.isRequired,
  favoriteFilms: PropTypes.arrayOf(filmCardProp).isRequired,
};

const mapStateToProps = (state) => ({
  favoriteFilms: state.favoriteFilms,
  isFavoriteFilmsLoaded: state.isFavoriteFilmsLoaded,
});

const mapDispatchToState = (dispatch) => ({
  changeActiveFilter(genre) {
    dispatch(ActionCreator.changeActiveFilter(genre));
  },
  loadFavoriteFilms(filmId) {
    dispatch(fetchFavoriteFilms(filmId));
  },
});

export {MyList};
export default connect(mapStateToProps, mapDispatchToState)(MyList);
