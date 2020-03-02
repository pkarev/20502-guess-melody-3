import React, {PureComponent} from "react";
import AudioPlayer from '../../components/audio-player/audio-player.jsx';

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