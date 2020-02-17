import React from 'react';
import PropTypes from 'prop-types';

const QuestionGenreScreen = ({question: {genre, tracks}, handleAnswer}) => (
  <section className="game game--genre">
    <header className="game__header">
      <a className="game__back" href="#">
        <span className="visually-hidden">Сыграть ещё раз</span>
        <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
      </a>

      <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
        <circle
          cx="390"
          cy="390"
          r="370"
          style={{
            WebkitTransformOrigin: `center`,
            MsTransformOrigin: `center`,
            transformOrigin: `center`
          }}
          filter="url(#blur)"
        ></circle>
      </svg>

      <div className="game__mistakes">
        <div className="wrong"></div>
        <div className="wrong"></div>
        <div className="wrong"></div>
      </div>
    </header>

    <section className="game__screen">
      <h2 className="game__title">Выберите {genre} треки</h2>
      <form className="game__tracks" onSubmit={handleAnswer}>
        {tracks.map((track) => (
          <div className="track" key={track.id}>
            <button className="track__button track__button--play" type="button"></button>
            <div className="track__status">
              <audio></audio>
            </div>
            <div className="game__answer">
              <input className="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-2"/>
              <label className="game__check" htmlFor="answer-2">Отметить</label>
            </div>
          </div>
        ))};

        <button className="game__submit button" type="submit">Ответить</button>
      </form>
    </section>
  </section>
);

QuestionGenreScreen.propTypes = {
  question: PropTypes.shape({
    genre: PropTypes.string,
    tracks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      genre: PropTypes.string,
    })),
  }),
  handleAnswer: PropTypes.func.isRequired,
};

export default QuestionGenreScreen;
