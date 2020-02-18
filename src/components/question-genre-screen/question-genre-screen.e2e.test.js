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
      genre: `metall`,
      id: 0,
    },
    {
      genre: `rap`,
      id: 1,
    },
    {
      genre: `rock`,
      id: 2,
    },
    {
      genre: `jazz`,
      id: 3,
    },
  ]
};

it(`When user answers the question, form is not submitted`, () => {
  const handleAnswer = jest.fn();

  const questionGenreScreen = shallow(
      <QuestionGenreScreen
        question={questionGenre}
        handleAnswer={handleAnswer}
      />
  );

  const form = questionGenreScreen.find(`form`);
  const formSendPrevention = jest.fn();

  form.simulate(`submit`, {
    preventDefault: formSendPrevention,
  });

  expect(handleAnswer.mock.calls.length).toBe(1);
  expect(formSendPrevention.mock.calls.length).toBe(1);
});

it(`When user answers the question, "handleAnswer" callback gets current question and user answers as arguments`, () => {
  const handleAnswer = jest.fn();

  const questionGenreScreen = shallow(
      <QuestionGenreScreen
        question={questionGenre}
        handleAnswer={handleAnswer}
      />
  );

  const form = questionGenreScreen.find(`form`);
  const thirdCheckbox = form.find(`.game__input`).at(2);

  thirdCheckbox.simulate(`change`, {target: {checked: true}});
  form.simulate(`submit`, {preventDefault: () => {}});

  expect(handleAnswer.mock.calls[0][0]).toMatchObject(questionGenre);
  expect(handleAnswer.mock.calls[0][1]).toMatchObject([false, false, true, false]);
});
