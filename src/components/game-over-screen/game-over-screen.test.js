import React from 'react';
import renderer from 'react-test-renderer';
import GameOverScreen from './game-over-screen.jsx';

it(`Render GameOverScreen`, () => {
  const tree = renderer
    .create(<GameOverScreen onPlayMoreClick={() => {}}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
