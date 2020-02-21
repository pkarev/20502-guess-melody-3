import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from '../audio-player/audio-player.jsx';

class QuestionGenreScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answers: [false, false, false, false],
      activePlayer: -1,
    };
  }

  render() {
    const {question, handleAnswer} = this.props;
    const {genre, tracks} = question;
    const {answers, activePlayer} = this.state;

    return (
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
          <form className="game__tracks" onSubmit={(evt) => {
            evt.preventDefault();
            handleAnswer(question, this.state.answers);
          }}>
            {tracks.map((track, index) => (
              <div className="track" key={track.id}>
                <AudioPlayer
                  isPlaying={activePlayer === index}
                  src={track.src}
                  onPlayerClick={() => {
                    this.setState({activePlayer: activePlayer === index ? -1 : index});
                  }}
                />
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
  handleAnswer: PropTypes.func.isRequired,
};

export default QuestionGenreScreen;
