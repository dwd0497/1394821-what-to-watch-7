import React, {useEffect, useRef, useState} from 'react';

import PropTypes from 'prop-types';


function VideoPlayer({isPlaying, previewVideoLink, posterImage}) {

  const [delay, setDelay] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.onloadeddata = () => setIsLoading(false);
    videoRef.current.muted = true;

    return () => {
      videoRef.current.onloadeddata = null;
      videoRef.current.onplay = null;
      videoRef.current.onpause = null;
      videoRef.current = null;
    };
  }, [previewVideoLink]);

  useEffect(() => {
    if (isPlaying && !isLoading) {
      setDelay(setTimeout(() => {
        videoRef.current.play();
      }, 1000));

      return;
    }

    clearTimeout(delay);
    videoRef.current.pause();
    videoRef.current.load();
  }, [isPlaying]);

  return (
    <video src={previewVideoLink} className="player__video" poster={posterImage} ref={videoRef} />
  );
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
};

export default VideoPlayer;
