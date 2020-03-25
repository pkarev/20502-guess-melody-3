import {reducer, AuthStatus, ActionCreator} from './user.js';

const initialState = {
  authStatus: AuthStatus.NO_AUTH,
};

it(`Reducer without params should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    authStatus: AuthStatus.NO_AUTH,
  });
});

it(`Reducer should set authStatus`, () => {
  expect(reducer(initialState, ActionCreator.setAuthStatus(AuthStatus.AUTH))).toEqual({
    authStatus: AuthStatus.AUTH,
  });
});
