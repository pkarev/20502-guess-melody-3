import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuestionArtistScreen from './question-artist-screen';
import withActivePlayer from '../../hocs/with-active-player/with-active-player';

const QuestionArtistScreenWrapped = withActivePlayer(QuestionArtistScreen);

Enzyme.configure({
  adapter: new Adapter(),
});

const questionArtist = {
  artist: `Пелагея`,
  src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  options: [
    {
      artist: `Пелагея`,
      id: 0,
    },
    {
      artist: `Меладзе`,
      id: 1,
    },
    {
      artist: `Шнуров`,
      id: 2,
    },
  ]
};

it(`When user answers the question, "handleAnswer" callback gets current question's artist and user answer as arguments`, () => {
  const onAnswer = jest.fn();

  const questionArtistScreen = mount(<QuestionArtistScreenWrapped question={questionArtist} onAnswer={onAnswer}/>);
  const answerRadio = questionArtistScreen.find(`.artist__input`);

  answerRadio.at(0).simulate(`change`, {preventDefault: () => {}});

  expect(onAnswer.mock.calls.length).toBe(1);
  expect(onAnswer.mock.calls[0][0]).toBe(questionArtist.artist);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(questionArtist.options[0]);
});
