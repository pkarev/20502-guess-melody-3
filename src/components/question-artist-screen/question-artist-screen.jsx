import React from 'react';
import PropTypes from 'prop-types';

const QuestionArtistScreen = ({
  question,
  onAnswer,
  renderPlayer
}) => {
  const {options, src} = question;
  return (
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
                onAnswer(question, option.artist);
              }}
            />
            <label className="artist__name" htmlFor={`answer-${index}`}>
              <img className="artist__picture" src={option.picture} alt={option.artist}/>
              {option.artist}
            </label>
          </div>
        ))}
      </form>
    </section>
  );
};

QuestionArtistScreen.propTypes = {
  question: PropTypes.shape({
    artist: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    })),
  }),
  onAnswer: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

export default React.memo(QuestionArtistScreen);
