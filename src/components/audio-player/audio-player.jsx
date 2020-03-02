import React from 'react';
import PropTypes from 'prop-types';

const AudioPlayer = ({isPlaying, isLoading, onPlayerClick, children}) => (
  <React.Fragment>
    <button className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
      type="button"
      disabled={isLoading}
      onClick={() => {
        onPlayerClick();
      }}
    />
    <div className="track__status">
      {children}
    </div>
  </React.Fragment>
);

AudioPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onPlayerClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default AudioPlayer;
