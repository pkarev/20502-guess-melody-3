import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      isLoading: true,
      isPlaying: props.isPlaying,
    };

    this._audioRef = createRef();
  }

  componentDidMount() {
    const {src} = this.props;
    const audio = this._audioRef.current;

    audio.src = src;
    audio.oncanplaythrough = () => this.setState({isLoading: false});
    audio.onplay = () => this.setState({isPlaying: true});
    audio.onpause = () => this.setState({isPlaying: false});
    audio.onstop = () => this.setState({isPlaying: false});
    audio.ontimeupdate = () => this.setState({progress: audio.currentTime});
  }

  componentWillUnmount() {
    const audio = this._audioRef.current;

    audio.src = ``;
    audio.oncanplaythrough = null;
    audio.onplay = () => null;
    audio.onpause = () => null;
    audio.onstop = () => null;
    audio.ontimeupdate = () => null;
  }

  render() {
    const {onPlayerClick} = this.props;
    const {isLoading, isPlaying} = this.state;

    return (
      <React.Fragment>
        <button className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={isLoading}
          onClick={() => {
            this.setState({isPlaying: !isPlaying});
            onPlayerClick();
          }}
        />
        <div className="track__status">
          <audio ref={this._audioRef}/>
        </div>
      </React.Fragment>
    );
  }

  componentDidUpdate() {
    const audio = this._audioRef.current;

    if (this.props.isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }
}

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayerClick: PropTypes.func.isRequired,
};

export default AudioPlayer;
