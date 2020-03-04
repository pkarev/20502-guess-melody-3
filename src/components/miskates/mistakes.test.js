import React from 'react';
import renderer from 'react-test-renderer';
import Mistakes from './mistakes.jsx';

it(`Render Mistakes`, () => {
  const tree = renderer
  .create(<Mistakes count={2}/>)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
