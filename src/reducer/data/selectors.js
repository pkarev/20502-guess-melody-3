import {createSelector} from 'reselect';
import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.DATA;

const getUnformattedQuestions = (state) => {
  return state[NAME_SPACE].questions;
};

export const getQuestions = createSelector(
    getUnformattedQuestions,
    (questions) => {
      return adaptQuestions(questions);
    }
);

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

