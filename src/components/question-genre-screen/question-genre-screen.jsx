import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class QuestionGenreScreen extends PureComponent {
  render() {
    const {question, onAnswer, renderPlayer, onAnswerOptionChange} = this.props;
    const {genre, tracks} = question;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks" onSubmit={(evt) => {
          evt.preventDefault();
          onAnswer(question);
        }}>
          {tracks.map((track, index) => (
            <div className="track" key={track.id}>
              {renderPlayer(track.src, index)}
              <div className="game__answer">
                <input className="game__input visually-hidden" type="checkbox" name="answer"
                  value={`answer-${index}`}
                  id={`answer-${index}`}
                  onChange={(evt) => {
                    onAnswerOptionChange(evt.target.checked, index);
                  }}
                />
                <label className="game__check" htmlFor={`answer-${index}`}>Отметить</label>
              </div>
            </div>
          ))};

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }
}

QuestionGenreScreen.propTypes = {
  question: PropTypes.shape({
    genre: PropTypes.string,
    tracks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      genre: PropTypes.string,
      src: PropTypes.string,
    })),
  }),
  onAnswer: PropTypes.func.isRequired,
  onAnswerOptionChange: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

export default QuestionGenreScreen;
