import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

HTMLMediaElement.prototype.play = () => {};
HTMLMediaElement.prototype.pause = () => {};

const audio = {
  src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
};

it(`AudioPlayer should on button click change button class from play to pause and vise versa`, () => {
  const audioPlayer = mount(<AudioPlayer
    src={audio.src}
    isPlaying={false}
  />);

  let playButton = audioPlayer.find(`.track__button`);
  expect(playButton.hasClass(`track__button--play`)).toBe(true);

  playButton.simulate(`click`);
  audioPlayer.update();

  playButton = audioPlayer.find(`.track__button`);
  expect(playButton.hasClass(`track__button--pause`)).toBe(true);

  playButton.simulate(`click`);
  audioPlayer.update();

  playButton = audioPlayer.find(`.track__button`);
  expect(playButton.hasClass(`track__button--play`)).toBe(true);
});
