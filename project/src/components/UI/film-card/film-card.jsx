import React from 'react';
import {Link} from 'react-router-dom';

import {AppRoute} from '../../../const';

function FilmCard() {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.FILM}>Fantastic Beasts: The Crimes of Grindelwald</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
