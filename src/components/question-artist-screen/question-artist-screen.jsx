import React from 'react';
import PropTypes from 'prop-types';

const QuestionArtistScreen = ({question: {artist, options}, handleAnswer}) => (
  <section className="game game--artist">
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
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <div className="track">
          <button className="track__button track__button--play" type="button"></button>
          <div className="track__status">
            <audio></audio>
          </div>
        </div>
      </div>

      <form className="game__artist">
        {options.map((option, index) => (
          <div className="artist" key={option.artist}>
            <input className="artist__input visually-hidden"
              type="radio"
              name="answer"
              value={`answer-${index}`}
              id={`answer-${index}`}
              onChange={(evt) => {
                evt.preventDefault();
                handleAnswer(artist, option);
              }}
            />
            <label className="artist__name" htmlFor={`answer-${index}`}>
              <img className="artist__picture" src="http://placehold.it/134x134" alt="Пелагея"/>
              {option.name}
            </label>
          </div>
        ))}
      </form>
    </section>
  </section>
);

QuestionArtistScreen.propTypes = {
  question: PropTypes.shape({
    artist: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string,
    })),
  }),
  handleAnswer: PropTypes.func.isRequired,
};

export default QuestionArtistScreen;
