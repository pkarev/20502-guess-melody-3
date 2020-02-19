import React from 'react';
import renderer from 'react-test-renderer';
import QuestionArtistScreen from './question-artist-screen';

const questionArtist = {
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
};

it(`Render QuestionArtistScreen`, () => {
  const tree = renderer
    .create(<QuestionArtistScreen question={questionArtist} handleAnswer={() => {}}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
