import {reducer, ActionType} from './reducer.js';

const initialState = {
  mistakes: 0,
  step: -1,
};

it(`Reducer without params should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    mistakes: 0,
    step: -1,
  });
});

it(`Reducer should increment step by given value`, () => {
  expect(reducer(initialState, {
    type: ActionType.INCREMENT_STEP,
    payload: 2
  })).toEqual({
    mistakes: 0,
    step: 1,
  });

  expect(reducer(initialState, {
    type: ActionType.INCREMENT_STEP,
    payload: 0
  })).toEqual({
    mistakes: 0,
    step: -1,
  });
});

it(`Reducer should increment mistakes by given value`, () => {
  expect(reducer(initialState, {
    type: ActionType.INCREMENT_MISTAKES,
    payload: 1
  })).toEqual({
    mistakes: 1,
    step: -1,
  });

  expect(reducer(initialState, {
    type: ActionType.INCREMENT_MISTAKES,
    payload: 0
  })).toEqual({
    mistakes: 0,
    step: -1,
  });
});
