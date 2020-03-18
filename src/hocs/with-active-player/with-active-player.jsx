import React, {PureComponent} from "react";
import Player from '../../components/audio-player/audio-player.jsx';
import withAudio from '../with-audio/with-audio.jsx';

const AudioPlayer = withAudio(Player);

const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayer: -1,
      };
    }

    render() {
      const {activePlayer} = this.state;

      return <Component
        {...this.props}
        renderPlayer = {(src, index = 0) => {
          return (
            <AudioPlayer
              src={src}
              isPlaying={activePlayer === index}
              onPlayerClick={() => this.setState({
                activePlayer: activePlayer === index ? -1 : index
              })}
            />
          );
        }}
      />;
    }
  }

  return WithActivePlayer;
};

export default withActivePlayer;
