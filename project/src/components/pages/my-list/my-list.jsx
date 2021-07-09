import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Logo from '../../UI/logo/logo';
import User from '../../UI/user/user';
import Footer from '../../UI/footer/footer';
import FilmsList from '../../UI/films-list/films-list';

import {ActionCreator} from '../../../store/actions';

function MyList({filmsCount, changeActiveFilter}) {

  useEffect(() => {
    changeActiveFilter({type: 'isFavorite', value: true});
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
        <FilmsList filmsCount={filmsCount} />
      </section>

      <Footer />
    </div>
  );
}

MyList.propTypes = {
  filmsCount: PropTypes.number.isRequired,
  changeActiveFilter: PropTypes.func.isRequired,
};

const mapDispatchToState = (dispatch) => ({
  changeActiveFilter(genre) {
    dispatch(ActionCreator.changeActiveFilter(genre));
  },
});

export {MyList};
export default connect(null, mapDispatchToState)(MyList);
