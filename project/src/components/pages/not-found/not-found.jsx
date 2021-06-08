import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../../UI/logo/logo';
import User from '../../UI/user/user';
import Footer from '../../UI/footer/footer';

import {AppRoute} from '../../../const';

function NotFound() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">404 Not Found</h1>

        <User />
      </header>


      <Link to={AppRoute.MAIN}>To home</Link>

      <Footer />
    </div>
  );
}

export default NotFound;
