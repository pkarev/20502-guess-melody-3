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
      picture: `https://htmlacademy-react-3.appspot.com/guess-melody/static/artist/Quincas_Moreira.jpg`,
    },
    {
      artist: `Меладзе`,
      picture: `https://htmlacademy-react-3.appspot.com/guess-melody/static/artist/Jesse_Gallagher.jpg`,
    },
    {
      artist: `Шнуров`,
      picture: `https://htmlacademy-react-3.appspot.com/guess-melody/static/artist/sextile.jpg`,
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
