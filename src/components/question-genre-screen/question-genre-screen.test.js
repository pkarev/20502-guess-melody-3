import React from 'react';
import renderer from 'react-test-renderer';
import QuestionGenreScreen from './question-genre-screen';

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

it(`Render QuestionGenreScreen`, () => {
  const tree = renderer
    .create(<QuestionGenreScreen question={questionGenre} handleAnswer={() => {}}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
