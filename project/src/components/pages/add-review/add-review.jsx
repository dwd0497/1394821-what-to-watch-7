import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../../UI/logo/logo';
import User from '../../UI/user/user';
import AddReviewForm from '../../UI/add-review-form/add-review-form';

import {AppRoute} from '../../../const';

import filmCardProp from '../../UI/film-card/film-card.prop';

function AddReview({film}) {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.FILM} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={AppRoute.ADD_REVIEW} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <User />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm />
      </div>

    </section>
  );
}

AddReview.propTypes = {
  film: filmCardProp.isRequired,
};

export default AddReview;
