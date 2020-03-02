import React, {createRef, PureComponent} from "react";
import PropTypes from 'prop-types';

const withAudio = (Component) => {
  class WithAudio extends PureComponent {
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
      audio.ontimeupdate = () => this.setState({
        progress: Math.floor(audio.currentTime),
      });
    }

    componentDidUpdate() {
      const audio = this._audioRef.current;

      if (this.props.isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
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
      const {isLoading, isPlaying} = this.state;
      const {onPlayerClick} = this.props;

      return (
        <Component
          {...this.props}
          isLoading={isLoading}
          isPlaying={isPlaying}
          onPlayerClick={() => {
            this.setState({isPlaying: !isPlaying});
            onPlayerClick();
          }}
        >
          <audio ref={this._audioRef}/>
        </Component>
      );
    }
  }

  WithAudio.propTypes = {
    src: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    onPlayerClick: PropTypes.func.isRequired,
  };

  return WithAudio;
};

export default withAudio;
