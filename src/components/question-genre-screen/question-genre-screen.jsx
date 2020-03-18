import React from 'react';
import PropTypes from 'prop-types';
import GenreQuestionItem from '../question-genre-item/genre-question-item.jsx';

const QuestionGenreScreen = ({question, onAnswer, renderPlayer, onAnswerOptionChange, answers}) => {
  const {genre, tracks} = question;

  return (
    <section className="game__screen">
      <h2 className="game__title">Выберите {genre} треки</h2>
      <form className="game__tracks" onSubmit={(evt) => {
        evt.preventDefault();
        onAnswer(question);
      }}>
        {tracks.map((track, index) => (
          <GenreQuestionItem
            track={tracks[index]}
            id={index}
            key={index}
            renderPlayer={renderPlayer}
            onAnswerOptionChange={onAnswerOptionChange}
            answer={answers[index]}
          />
        ))};

        <button className="game__submit button" type="submit">Ответить</button>
      </form>
    </section>
  );
};

QuestionGenreScreen.propTypes = {
  question: PropTypes.shape({
    genre: PropTypes.string,
    tracks: PropTypes.arrayOf(PropTypes.shape({
      genre: PropTypes.string,
      src: PropTypes.string,
    })),
  }),
  onAnswer: PropTypes.func.isRequired,
  onAnswerOptionChange: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
  answers: PropTypes.arrayOf(PropTypes.bool),
};

export default React.memo(QuestionGenreScreen);
