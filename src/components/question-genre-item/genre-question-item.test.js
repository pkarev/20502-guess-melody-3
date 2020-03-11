import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionItem from './genre-question-item';

const track = {
  id: 0,
  genre: `metall`,
  src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
};

it(`Render Component`, () => {
  const tree = renderer
  .create(
      <GenreQuestionItem
        track={track}
        onAnswerOptionChange={() => {}}
        renderPlayer={() => {}}
        id={0}
        answer={false}
      />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
