import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import withAudio from './with-audio.jsx';

const MockComponent = ({children}) => (
  <div>{children}</div>
);

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

const MockComponentWrapped = withAudio(MockComponent);

it(`Render WithAudio HOC`, () => {
  const tree = renderer
    .create(
        <MockComponentWrapped
          isPlaying={false}
          src={``}
          onPlayerClick={() => {}}
        />, {
          createNodeMock: () => ({})
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
