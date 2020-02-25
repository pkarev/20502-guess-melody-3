import React from 'react';
import renderer from 'react-test-renderer';
import QuestionGenreScreen from './question-genre-screen';

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

it(`Render QuestionGenreScreen`, () => {
  const tree = renderer
    .create(<QuestionGenreScreen
      question={questionGenre}
      onAnswer={() => {}}
    />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
