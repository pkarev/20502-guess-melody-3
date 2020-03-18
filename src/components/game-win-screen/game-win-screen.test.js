import React from 'react';
import renderer from 'react-test-renderer';
import GameWinScreen from './game-win-screen.jsx';

it(`Render GameWinScreen`, () => {
  const tree = renderer
    .create(<GameWinScreen correctAnswers={1} wrongAnswers={1} onPlayMoreClick={() => {}}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
