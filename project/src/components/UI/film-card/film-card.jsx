import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import VideoPlayer from '../video-player/video-player';

import {AppRoute} from '../../../const';

import filmCardProp from './film-card.prop';

function FilmCard({film}) {
  const {name, previewVideoLink, posterImage} = film;

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => setIsPlaying(true)} onMouseLeave={() => setIsPlaying(false)}>
      <div className="small-film-card__image">
        <VideoPlayer previewVideoLink={previewVideoLink} posterImage={posterImage} isPlaying={isPlaying} />
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
