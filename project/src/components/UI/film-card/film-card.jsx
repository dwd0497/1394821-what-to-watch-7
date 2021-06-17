import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {AppRoute} from '../../../const';

import filmCardProp from './film-card.prop';

function FilmCard({film}) {
  const {name, previewImage} = film;
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.FILM}>{name}</Link>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  film: filmCardProp.isRequired,
};

export default FilmCard;
