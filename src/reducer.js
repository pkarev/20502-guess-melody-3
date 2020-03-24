const initialState = {
  mistakes: 0,
  step: -1,
  maxMistakes: 3,
  questions: [],
};

const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`,
  RESET_GAME: `RESET_GAME`,
  LOAD_QUESTIONS: `LOAD_QUESTIONS`,
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

    case ActionType.LOAD_QUESTIONS:
      return Object.assign({}, state, {
        questions: action.payload
      });
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
  loadQuestions: (questions) => ({
    type: ActionType.LOAD_QUESTIONS,
    payload: questions
  }),
};

const Operation = {
  loadQuestions: () => (dispatch, getState, api) => {
    return api.get(`/questions`)
      .then((response) => {
        dispatch(ActionCreator.loadQuestions(adaptQuestions(response.data)));
      });
  }
};

const isQuestionArtistCorrect = (question, answer) => {
  return question.artist === answer;
};

const isQuestionGenreCorrect = (question, answer) => {
  return answer.every((item, index) => {
    return item === (question.tracks[index].genre === question.genre);
  });
};

const adaptQuestions = (questionsList) => {
  const QuestionType = {
    GENRE: `genre`,
    ARTIST: `artist`
  };
  return questionsList.map((question) => {
    switch (question.type) {
      case QuestionType.GENRE:
        const {genre, answers: tracks} = question;
        return {
          genre,
          tracks,
        };

      case QuestionType.ARTIST:
        const {song: {artist, src}, answers: options} = question;
        return {
          artist,
          src,
          options,
        };
    }

    return question;
  });
};

export {reducer, Operation, ActionType, ActionCreator};
