import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {App} from './app.jsx';
import NameSpace from '../../reducer/name-space';
import {AuthStatus} from '../../reducer/user/user';

const mockStore = configureStore([]);

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
  },
];

describe(`Render App`, () => {
  it(`Render WelcomeScreen`, () => {
    const store = mockStore({
      mistakes: 0,
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              mistakes={0}
              maxMistakes={3}
              step={-1}
              questions={questions}
              onAnswer={() => {}}
              onWelcomeButtonClick={() => {}}
              onPlayMoreClick={() => {}}
              isDataLoadErrorShown={false}
              authStatus={AuthStatus.NO_AUTH}
            />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render QuestionGenreScreen`, () => {
    const store = mockStore({
      [NameSpace.GAME]: {
        mistakes: 0,
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              mistakes={0}
              maxMistakes={3}
              step={0}
              questions={questions}
              onAnswer={() => {}}
              onWelcomeButtonClick={() => {}}
              onPlayMoreClick={() => {}}
              isDataLoadErrorShown={false}
              authStatus={AuthStatus.NO_AUTH}
            />
          </Provider>, {
            createNodeMock: () => ({}),
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render QuestionArtistScreen`, () => {
    const store = mockStore({
      [NameSpace.GAME]: {
        mistakes: 3,
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              mistakes={0}
              maxMistakes={3}
              step={1}
              questions={questions}
              onAnswer={() => {}}
              onWelcomeButtonClick={() => {}}
              onPlayMoreClick={() => {}}
              isDataLoadErrorShown={false}
              authStatus={AuthStatus.NO_AUTH}
            />
          </Provider>, {
            createNodeMock: () => ({}),
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

