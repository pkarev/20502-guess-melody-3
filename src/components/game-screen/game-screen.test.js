import React from 'react';
import renderer from 'react-test-renderer';
import GameScreen from './game-screen';
import {GameType} from '../../consts';

const children = <div className="demo-children"/>;

it(`Render GameScreen component`, () => {
  const tree = renderer
  .create(
      <GameScreen type={GameType.GENRE}>
        {children}
      </GameScreen>
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
