const initialState = {
  mistakes: 0,
  step: -1,
  maxMistakes: 3,
};

const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`,
  RESET_GAME: `RESET_GAME`,
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

    case ActionType.RESET_GAME:
      return Object.assign({}, initialState, {step: 0});
  }

  return state;
};

const ActionCreator = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  }),
  incrementMistakes: (question, answer) => {
    let answerIsCorrect = false;

    if (question.genre) {
      answerIsCorrect = isQuestionGenreCorrect(question, answer);
    }

    if (question.artist) {
      answerIsCorrect = isQuestionArtistCorrect(question, answer);
    }

    return {
      type: ActionType.INCREMENT_MISTAKES,
      payload: answerIsCorrect ? 0 : 1,
    };
  },
  resetGame: () => ({
    type: ActionType.RESET_GAME,
  }),
};

const isQuestionArtistCorrect = (question, answer) => {
  return question.artist === answer;
};

const isQuestionGenreCorrect = (question, answer) => {
  return answer.every((item, index) => {
    return item === (question.tracks[index].genre === question.genre);
  });
};


export {reducer, ActionType, ActionCreator};
