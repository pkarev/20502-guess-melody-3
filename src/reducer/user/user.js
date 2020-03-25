const AuthStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authStatus: AuthStatus.NO_AUTH,
};

const ActionType = {
  SET_AUTH_STATUS: `SET_AUTH_STATUS`
};

const ActionCreator = {
  setAuthStatus: (status) => ({
    type: ActionType.SET_AUTH_STATUS,
    payload: status
  })
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.post(`/login`)
      .then(() => {
        dispatch(ActionCreator.setAuthStatus(AuthStatus.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_AUTH_STATUS:
      return Object.assign({}, state, {
        authStatus: action.payload,
      });
  }

  return state;
};

export {reducer, Operation, AuthStatus};
