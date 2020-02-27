const initialState = {
  mistakes: 0,
  step: -1,
};

const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_MISTAKES:
      return Object.assign({}, state, {
        mistakes: state.mistakes + action.payload,
      });

    case ActionType.INCREMENT_STEP:
      return Object.assign({}, state, {
        step: state.step + action.payload,
      });
  }

  return state;
};

const ActionCreator = {
  incrementStep: (value) => ({
    type: ActionType.INCREMENT_STEP,
    payload: value ? value : 1,
  })
};

export {reducer, ActionType, ActionCreator};
