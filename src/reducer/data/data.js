const initialState = {
  questions: [],
  isDataLoadErrorShown: false,
};

const ActionType = {
  LOAD_QUESTIONS: `LOAD_QUESTIONS`,
  SHOW_ERROR: `SHOW_ERROR`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_QUESTIONS:
      return Object.assign({}, state, {
        questions: action.payload,
      });

    case ActionType.SHOW_ERROR:
      return Object.assign({}, state, {
        isDataLoadErrorShown: true,
      });
  }

  return state;
};

const ActionCreator = {
  loadQuestions: (questions) => ({
    type: ActionType.LOAD_QUESTIONS,
    payload: questions
  }),
  showError: () => ({
    type: ActionType.SHOW_ERROR,
    payload: null,
  })
};

const Operation = {
  loadQuestions: () => (dispatch, getState, api) => {
    return api.get(`/questions`)
      .then((response) => {
        dispatch(ActionCreator.loadQuestions(response.data));
      })
      .catch((error) => {
        dispatch(ActionCreator.showError(error));
      });
  }
};

export {reducer, Operation, ActionType, ActionCreator};
