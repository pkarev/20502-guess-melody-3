import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

const Settings = {
  ERRORS_COUNT: 3,
};

it(`Render WelcomeScreen`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      maxMistakes={Settings.ERRORS_COUNT}
      onWelcomeButtonClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
