import {reducer, ActionType, ActionCreator} from './game.js';

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
const questionArtist = {
  artist: `Пелагея`,
  src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  options: [
    {
      artist: `Пелагея`,
      id: 0,
    },
    {
      artist: `Меладзе`,
      id: 1,
    },
    {
      artist: `Шнуров`,
      id: 2,
    },
  ]
};

const correctGenreAnswers = [true, false, false, false];
const inCorrectGenreAnswers = [false, false, false, false];
const correctArtistAnswer = `Пелагея`;
const incorrectArtistAnswer = `Шнур`;

const initialState = {
  mistakes: 0,
  step: -1,
  maxMistakes: 3,
};

it(`Reducer without params should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    mistakes: 0,
    step: -1,
    maxMistakes: 3,
  });
});

it(`Reducer should increment step by given value`, () => {
  expect(reducer(initialState, {
    type: ActionType.INCREMENT_STEP,
    payload: 1
  })).toEqual({
    mistakes: 0,
    step: 0,
    maxMistakes: 3,
  });
});

it(`Reducer should increment mistakes by given value`, () => {
  expect(reducer(initialState, {
    type: ActionType.INCREMENT_MISTAKES,
    payload: 1
  })).toMatchObject({
    mistakes: 1,
    step: -1,
    maxMistakes: 3,
  });

  expect(reducer(initialState, {
    type: ActionType.INCREMENT_MISTAKES,
    payload: 0
  })).toMatchObject({
    mistakes: 0,
    step: -1,
    maxMistakes: 3,
  });
});

it(`Reducer should reset game`, () => {
  expect(reducer(initialState, ActionCreator.resetGame())).toEqual(Object.assign(initialState, {step: 0}));
});

describe(`Action creator work correctly`, () => {
  it(`Action creator for increment step returns correct action`, () => {
    expect(ActionCreator.incrementStep()).toEqual({
      type: ActionType.INCREMENT_STEP,
      payload: 1,
    });
  });

  it(`Action creator increment mistakes for questionGenre returns correct action`, () => {
    expect(ActionCreator.incrementMistakes(questionGenre, correctGenreAnswers)).toEqual({
      type: ActionType.INCREMENT_MISTAKES,
      payload: 0,
    });

    expect(ActionCreator.incrementMistakes(questionGenre, inCorrectGenreAnswers)).toEqual({
      type: ActionType.INCREMENT_MISTAKES,
      payload: 1,
    });
  });

  it(`Action creator increment mistakes for questionArtist returns correct action`, () => {
    expect(ActionCreator.incrementMistakes(questionArtist, correctArtistAnswer)).toEqual({
      type: ActionType.INCREMENT_MISTAKES,
      payload: 0,
    });

    expect(ActionCreator.incrementMistakes(questionArtist, incorrectArtistAnswer)).toEqual({
      type: ActionType.INCREMENT_MISTAKES,
      payload: 1,
    });
  });
});
