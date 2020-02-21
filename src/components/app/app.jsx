import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import QuestionArtistScreen from '../question-artist-screen/question-artist-screen.jsx';
import QuestionGenreScreen from '../question-genre-screen/question-genre-screen.jsx';
import AudioPlayer from '../audio-player/audio-player.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1,
    };

    this._handleAnswer = this._handleAnswer.bind(this);
  }

  _handleAnswer() {
    this.setState((prevState) => ({
      step: prevState.step + 1,
    }));
  }

  _renderScreen() {
    const {errorsCount, questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          errorsCount={errorsCount}
          onWelcomeButtonClick={() => {
            this.setState({
              step: 0,
            });
          }}
        />
      );
    }

    if (question.artist) {
      return (
        <QuestionArtistScreen question={questions[1]} handleAnswer={this._handleAnswer}/>
      );
    }

    if (question.genre) {
      return (
        <QuestionGenreScreen question={questions[0]} handleAnswer={this._handleAnswer}/>
      );
    }

    return null;
  }

  render() {
    const {questions} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderScreen()}
          </Route>
          <Route exact path="/dev-genre">
            <QuestionGenreScreen question={questions[0]} handleAnswer={this._handleAnswer}/>
          </Route>
          <Route exact path="/dev-artist">
            <QuestionArtistScreen question={questions[1]} handleAnswer={this._handleAnswer}/>
          </Route>
          <Route exact path="/dev-player">
            <AudioPlayer src={`${questions[1][`src`]}`}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.shape({
      genre: PropTypes.string,
      tracks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        genre: PropTypes.string,
      })),
    }),
    PropTypes.shape({
      artist: PropTypes.string,
      options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        artist: PropTypes.string,
      })),
    }),
  ])).isRequired,
};

export default App;
