import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withGenreAnswers from './with-genre-answers';

Enzyme.configure({
  adapter: new Adapter(),
});

const MockComponent = () => <div/>;
const MockComponentWrapped = withGenreAnswers(MockComponent);

const questionGenre = {
  genre: `metall`,
  tracks: [
    {
      id: 0,
      genre: `metall`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    {
      id: 1,
      genre: `rap`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    {
      id: 2,
      genre: `rock`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    {
      id: 3,
      genre: `jazz`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
  ]
};

it(`Should change answers`, () => {
  const mockComponent = shallow(
      <MockComponentWrapped
        question={questionGenre}
        onAnswer={(() => {})}
      />);

  expect(mockComponent.state().answers).toEqual([false, false, false, false]);

  mockComponent.props().onAnswerOptionChange(true, 0);
  expect(mockComponent.state().answers).toEqual([true, false, false, false]);

  mockComponent.props().onAnswerOptionChange(true, 1);
  expect(mockComponent.state().answers).toEqual([true, true, false, false]);
});
