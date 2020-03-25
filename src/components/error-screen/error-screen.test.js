import React from 'react';
import renderer from 'react-test-renderer';
import ErrorScreen from './error-screen';

it(`Render ErrorScreen`, () => {
  const tree = renderer
  .create(<ErrorScreen/>)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
