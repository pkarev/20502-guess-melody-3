import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuestionGenreScreen from './question-genre-screen';

Enzyme.configure({
  adapter: new Adapter(),
});

const questionGenre = {
  genre: `metall`,
  tracks: [
    {
      id: 0,
      genre: `metall`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    {
      id: 1,
      genre: `rap`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    {
      id: 2,
      genre: `rock`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    {
      id: 3,
      genre: `jazz`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
  ]
};

it(`When user answers the question, form is not submitted`, () => {
  const onAnswer = jest.fn();

  const questionGenreScreen = shallow(
      <QuestionGenreScreen
        question={questionGenre}
        onAnswer={onAnswer}
      />
  );

  const form = questionGenreScreen.find(`form`);
  const formSendPrevention = jest.fn();

  form.simulate(`submit`, {
    preventDefault: formSendPrevention,
  });

  expect(onAnswer.mock.calls.length).toBe(1);
  expect(formSendPrevention.mock.calls.length).toBe(1);
});

it(`When user answers the question, "onAnswer" callback gets current question and user answers as arguments`, () => {
  const onAnswer = jest.fn();

  const questionGenreScreen = shallow(
      <QuestionGenreScreen
        question={questionGenre}
        onAnswer={onAnswer}
      />
  );

  const form = questionGenreScreen.find(`form`);
  const thirdCheckbox = form.find(`.game__input`).at(2);

  thirdCheckbox.simulate(`change`, {target: {checked: true}});
  form.simulate(`submit`, {preventDefault: () => {}});

  expect(onAnswer.mock.calls[0][0]).toMatchObject(questionGenre);
  expect(onAnswer.mock.calls[0][1]).toMatchObject([false, false, true, false]);
});
