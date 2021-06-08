import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../UI/logo/logo';
import User from '../../UI/user/user';
import Footer from '../../UI/footer/footer';
import FilmCard from '../../UI/film-card/film-card';

function MyList({filmsCount}) {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <User />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {Array(filmsCount).fill().map(() => <FilmCard key={Date.now()} />)}
        </div>
      </section>

      <Footer />
    </div>
  );
}

MyList.propTypes = {
  filmsCount: PropTypes.number.isRequired,
};

export default MyList;
