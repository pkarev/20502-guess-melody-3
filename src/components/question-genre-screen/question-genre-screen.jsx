import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import withActivePlayer from '../../hocs/with-active-player/with-active-player.jsx';

class QuestionGenreScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answers: [false, false, false, false],
    };
  }

  render() {
    const {question, onAnswer, renderPlayer} = this.props;
    const {genre, tracks} = question;
    const {answers} = this.state;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks" onSubmit={(evt) => {
          evt.preventDefault();
          onAnswer(question, this.state.answers);
        }}>
          {tracks.map((track, index) => (
            <div className="track" key={track.id}>
              {renderPlayer(track.src, index)}
              <div className="game__answer">
                <input className="game__input visually-hidden" type="checkbox" name="answer"
                  value={`answer-${index}`}
                  id={`answer-${index}`}
                  onChange={(evt) => {
                    const value = evt.target.checked;

                    this.setState({
                      answers: [
                        ...answers.slice(0, index),
                        value,
                        ...answers.slice(index + 1)
                      ]
                    });
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
  renderPlayer: PropTypes.func.isRequired,
};

export default withActivePlayer(QuestionGenreScreen);
