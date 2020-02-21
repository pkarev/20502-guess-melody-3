import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuestionArtistScreen from './question-artist-screen';

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
  const handleAnswer = jest.fn();

  const questionArtistScreen = shallow(<QuestionArtistScreen question={questionArtist} handleAnswer={handleAnswer}/>);
  const answerRadio = questionArtistScreen.find(`.artist__input`);

  answerRadio.at(0).simulate(`change`, {preventDefault: () => {}});

  expect(handleAnswer.mock.calls.length).toBe(1);
  expect(handleAnswer.mock.calls[0][0]).toBe(questionArtist.artist);
  expect(handleAnswer.mock.calls[0][1]).toMatchObject(questionArtist.options[0]);
});
