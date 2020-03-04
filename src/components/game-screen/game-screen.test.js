import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import GameScreen from './game-screen.jsx';
import {GameType} from '../../consts.js';
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);
const children = <div className="demo-children"/>;

it(`Render GameScreen component`, () => {
  const store = mockStore({
    mistakes: 3,
  });

  const tree = renderer
  .create(
      <Provider store={store}>
        <GameScreen type={GameType.GENRE}>
          {children}
        </GameScreen>
      </Provider>
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
