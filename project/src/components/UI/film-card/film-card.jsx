import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import VideoPlayer from '../video-player/video-player';

import {AppRoute} from '../../../const';

import filmCardProp from './film-card.prop';

const DELAY = 1000;

function FilmCard({film}) {
  const {name, previewVideoLink, previewImage, id} = film;

  const [isPlaying, setIsPlaying] = useState(false);

  let delay = null;

  useEffect(() => () => {
    clearTimeout(delay);
    delay = null;
  });

  const startPlaying = () => {
    delay = setTimeout(() => setIsPlaying(true), DELAY);
  };

  const stopPlaying = () => {
    setIsPlaying(false);
    clearTimeout(delay);
  };

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={startPlaying} onMouseLeave={stopPlaying}>
      <Link to={`${AppRoute.FILMS}/${id}`}>
        <div className="small-film-card__image">
          <VideoPlayer previewVideoLink={previewVideoLink} previewImage={previewImage} isPlaying={isPlaying} />
        </div>
      </Link>

      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.FILMS}/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  film: filmCardProp.isRequired,
};

export default FilmCard;
