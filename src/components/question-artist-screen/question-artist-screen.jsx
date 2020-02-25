import React from 'react';
import PropTypes from 'prop-types';
import withAudioPlayer from '../../hocs/with-audio-player/with-audio-player.jsx';

const QuestionArtistScreen = (props) => {
  const {question: {artist, options, src}, onAnswer, renderPlayer} = props;

  return (
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
            {renderPlayer(src)}
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
                  onAnswer(artist, option);
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
};

QuestionArtistScreen.propTypes = {
  question: PropTypes.shape({
    artist: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string.isRequired,
    })),
  }),
  onAnswer: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

export default withAudioPlayer(QuestionArtistScreen);
