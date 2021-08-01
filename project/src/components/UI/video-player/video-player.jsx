import React, {useEffect, useRef} from 'react';

import PropTypes from 'prop-types';

function VideoPlayer({isPlaying, previewVideoLink, posterImage}) {

  const videoRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.load();
    }
  }, [isPlaying]);

  return (
    <video src={previewVideoLink} muted className="player__video" poster={posterImage} ref={videoRef} />
  );
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
};

export default VideoPlayer;
