import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {App} from './app.jsx';

const mockStore = configureStore([]);

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

describe(`Render App`, () => {
  it(`Render WelcomeScreen`, () => {
    const store = mockStore({
      mistakes: 3,
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              errorsCount={Settings.ERRORS_COUNT}
              questions={questions}
              step={-1}
              onAnswer={() => {}}
              onWelcomeButtonClick={() => {}}
            />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render QuestionGenreScreen`, () => {
    const store = mockStore({
      mistakes: 3,
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              errorsCount={Settings.ERRORS_COUNT}
              questions={questions}
              step={0}
              onAnswer={() => {}}
              onWelcomeButtonClick={() => {}}
            />
          </Provider>, {
            createNodeMock: () => ({}),
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render QuestionArtistScreen`, () => {
    const store = mockStore({
      mistakes: 3,
    });

    const tree = renderer
    .create(
        <Provider store={store}>
          <App
            errorsCount={Settings.ERRORS_COUNT}
            questions={questions}
            step={0}
            onAnswer={() => {}}
            onWelcomeButtonClick={() => {}}
          />
        </Provider>, {
          createNodeMock: () => ({}),
        })
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

