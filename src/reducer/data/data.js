const initialState = {
  questions: [],
};

const ActionType = {
  LOAD_QUESTIONS: `LOAD_QUESTIONS`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_QUESTIONS:
      return Object.assign({}, state, {
        questions: action.payload
      });
  }

  return state;
};

const ActionCreator = {
  loadQuestions: (questions) => ({
    type: ActionType.LOAD_QUESTIONS,
    payload: questions
  }),
};

const Operation = {
  loadQuestions: () => (dispatch, getState, api) => {
    return api.get(`/questions`)
      .then((response) => {
        dispatch(ActionCreator.loadQuestions(response.data));
      });
  }
};

export {reducer, Operation, ActionType, ActionCreator};
