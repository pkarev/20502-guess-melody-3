import React from 'react';
import PropTypes from 'prop-types';

const QuestionArtistScreen = ({
  question: {artist, options, src},
  onAnswer,
  renderPlayer
}) => (
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
);

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

export default React.memo(QuestionArtistScreen);
