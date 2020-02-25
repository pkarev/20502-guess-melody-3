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
  },
  {
    artist: `Пелагея`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    options: [
      {
        id: 0,
        artist: `Пелагея`,
      },
      {
        id: 1,
        artist: `Меладзе`,
      },
      {
        id: 2,
        artist: `Шнуров`,
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
