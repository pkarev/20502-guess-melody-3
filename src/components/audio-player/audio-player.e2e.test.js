import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`AudioPlayer calls callback on button click`, () => {
  const handleButtonClick = jest.fn();
  const audioPlayer = shallow(<AudioPlayer
    isPlaying={false}
    isLoading={true}
    onPlayerClick={handleButtonClick}
  >
    <audio/>
  </AudioPlayer>);

  const playButton = audioPlayer.find(`.track__button`);
  playButton.simulate(`click`);

  expect(handleButtonClick).toBeCalledTimes(1);
});
