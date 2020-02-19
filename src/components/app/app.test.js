import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const Settings = {
  ERRORS_COUNT: 3,
};

const questions = [
  {
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
  },
  {
    artist: `Пелагея`,
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
  },
];

it(`Render App`, () => {
  const tree = renderer
    .create(<App errorsCount={Settings.ERRORS_COUNT} questions={questions}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
