import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Logo from '../../UI/logo/logo';
import User from '../../UI/user/user';
import Footer from '../../UI/footer/footer';
import FilmsList from '../../UI/films-list/films-list';

import filmCardProp from '../../UI/film-card/film-card.prop';

function MyList({filmsCount, films}) {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <User />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList filmsCount={filmsCount} films={films} />
      </section>

      <Footer />
    </div>
  );
}

MyList.propTypes = {
  filmsCount: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(filmCardProp).isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
});

export {MyList};
export default connect(mapStateToProps, null)(MyList);
