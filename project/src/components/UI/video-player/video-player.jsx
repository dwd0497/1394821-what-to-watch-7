import React, {useEffect, useRef} from 'react';

import PropTypes from 'prop-types';

function VideoPlayer({isPlaying, previewVideoLink, previewImage}) {

  const videoRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.load();
    }
  }, [isPlaying]);

  return (
    <video src={previewVideoLink} muted className="player__video" poster={previewImage} ref={videoRef} />
  );
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
};

export default VideoPlayer;
