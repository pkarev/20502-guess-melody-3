import React from 'react';
import renderer from 'react-test-renderer';
import AuthorizationScreen from './authorization-screen';

it(`Render Component`, () => {
  const tree = renderer
  .create(<AuthorizationScreen onAuth={() => {}} onPlayMoreClick={() => {}}/>)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
