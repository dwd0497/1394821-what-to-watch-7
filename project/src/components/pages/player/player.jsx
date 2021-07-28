import React, {useEffect, useRef, useState} from 'react';
import {getFilms} from '../../../store/app-data/selectors';
import {useSelector} from 'react-redux';
import {formatTime} from '../../../utils/utils';
import Loading from '../loading/loading';
import PropTypes from 'prop-types';

function Player({match, history}) {

  const [isPlaying, setIsPlaying] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isFilmLoaded, setIsFilmLoaded] = useState(false);

  const videoRef = useRef();

  const filmId = +match.params.id;

  const filmsList = useSelector(getFilms);

  const currentFilm = filmsList.find((film) => film.id === filmId);

  const onPlayClick = () => {
    setIsPlaying((prevState) => !prevState);
  };

  const onFullScreenClick = () => {
    videoRef.current.requestFullscreen();
  };

  useEffect(() => {
    videoRef.current.onloadeddata = () => {
      setIsFilmLoaded(true);
      setTimeElapsed(videoRef.current.duration);
    };
    videoRef.current.ontimeupdate = () => {
      setTimeElapsed(videoRef.current.duration - videoRef.current.currentTime);
    };
  }, []);


  useEffect(() => {
    isPlaying ? videoRef.current.play() : videoRef.current.pause();
  }, [isPlaying]);

  return (
    <div className="player">
      {isFilmLoaded ?? <Loading/>}
      <video src={currentFilm.videoLink} className="player__video" poster={currentFilm.posterImage} ref={videoRef} />

      <button onClick={() => history.goBack()} type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"/>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">-{formatTime(timeElapsed)}</div>
        </div>

        <div className="player__controls-row">
          <button onClick={onPlayClick} type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={isPlaying ? '#pause' : '#play-s'}/>
            </svg>
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button onClick={onFullScreenClick} type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"/>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

Player.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Player;
