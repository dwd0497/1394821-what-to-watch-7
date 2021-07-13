import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Logo from '../../UI/logo/logo';
import User from '../../UI/user/user';
import Footer from '../../UI/footer/footer';
import FilmsList from '../../UI/films-list/films-list';

import {ActionCreator} from '../../../store/actions';
import {FILMS_COUNT} from '../../../const';

function MyList({changeActiveFilter, setDisplayedFilmsCount}) {

  useEffect(() => {
    changeActiveFilter({type: 'isFavorite', value: true});
    setDisplayedFilmsCount(FILMS_COUNT);
  }, []);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <User />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList />
      </section>

      <Footer />
    </div>
  );
}

MyList.propTypes = {
  changeActiveFilter: PropTypes.func.isRequired,
  setDisplayedFilmsCount: PropTypes.func.isRequired,
};

const mapDispatchToState = (dispatch) => ({
  changeActiveFilter(genre) {
    dispatch(ActionCreator.changeActiveFilter(genre));
  },
  setDisplayedFilmsCount(count) {
    dispatch(ActionCreator.setDisplayedFilmsCount(count));
  },
});

export {MyList};
export default connect(null, mapDispatchToState)(MyList);
