import React from 'react';
import renderer from 'react-test-renderer';
import QuestionArtistScreen from './question-artist-screen';
import withActivePlayer from '../../hocs/with-active-player/with-active-player';

const QuestionArtistScreenWrapped = withActivePlayer(QuestionArtistScreen);

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

it(`Render QuestionArtistScreen`, () => {
  const tree = renderer
    .create(<QuestionArtistScreenWrapped
      question={questionArtist}
      onAnswer={() => {}}
    />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
