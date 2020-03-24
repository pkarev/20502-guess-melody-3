import {reducer, ActionType, ActionCreator} from './data.js';

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
const questions = [questionArtist, questionGenre];

const initialState = {
  questions: [],
};

it(`Reducer without params should return initial state`, () => {
  expect(reducer(undefined, {})).toMatchObject(initialState);
});

it(`Reducer should load questions`, () => {
  expect(reducer(initialState, ActionCreator.loadQuestions(questions))).toMatchObject({
    questions,
  });
});

describe(`Action creator work correctly`, () => {
  it(`Action creator load questions get questions`, () => {
    expect(ActionCreator.loadQuestions([questionGenre, questionArtist])).toEqual({
      type: ActionType.LOAD_QUESTIONS,
      payload: [questionGenre, questionArtist]
    });
  });
});
