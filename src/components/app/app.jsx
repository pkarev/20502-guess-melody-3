import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import GameScreen from '../game-screen/game-screen.jsx';
import QuestionGenreScreen from '../question-genre-screen/question-genre-screen.jsx';
import QuestionArtistScreen from '../question-artist-screen/question-artist-screen.jsx';
import GameWinScreen from '../game-win-screen/game-win-screen.jsx';
import GameOverScreen from '../game-over-screen/game-over-screen.jsx';
import ErrorScreen from '../error-screen/error-screen.jsx';
import AuthorizationScreen from '../authorization-screen/authorization-screen.jsx';
import withActivePlayer from '../../hocs/with-active-player/with-active-player.jsx';
import withGenreAnswers from '../../hocs/with-genre-answers/with-genre-answers.jsx';
import {GameType} from '../../consts.js';
import {ActionCreator} from '../../reducer/game/game.js';
import {getMaxMistakes, getMistakes, getStep} from '../../reducer/game/selectors.js';
import {getQuestions, getDataLoadStatus} from '../../reducer/data/selectors.js';
import {AuthStatus} from '../../reducer/user/user.js';
import {getAuthStatus} from '../../reducer/user/selectors.js';

const QuestionGenreScreenWrapped = withActivePlayer(withGenreAnswers(QuestionGenreScreen));
const QuestionArtistScreenWrapped = withActivePlayer(QuestionArtistScreen);

class App extends PureComponent {
  _renderScreen() {
    const {
      maxMistakes,
      questions,
      step,
      onWelcomeButtonClick,
      onAnswer,
      onPlayMoreClick,
      mistakes,
      isDataLoadErrorShown,
      authStatus,
    } = this.props;
    const question = questions[step];

    if (isDataLoadErrorShown) {
      return (
        <ErrorScreen/>
      );
    }

    if (step === -1) {
      return (
        <WelcomeScreen
          maxMistakes={maxMistakes}
          onWelcomeButtonClick={onWelcomeButtonClick}
        />
      );
    }

    if (mistakes === maxMistakes) {
      return (
        <GameOverScreen onPlayMoreClick={onPlayMoreClick}/>
      );
    }

    if (step === questions.length) {
      switch (authStatus) {
        case AuthStatus.AUTH:
          return (
            <GameWinScreen wrongAnswers={mistakes} correctAnswers={step - mistakes} onPlayMoreClick={onPlayMoreClick}/>
          );
        case AuthStatus.NO_AUTH:
          return (
            <AuthorizationScreen onLogin={() => {}} onPlayMoreClick={onPlayMoreClick}/>
          );
      }

      return null;
    }

    if (question.artist) {
      return (
        <GameScreen type={GameType.ARTIST}>
          <QuestionArtistScreenWrapped question={questions[step]} onAnswer={onAnswer}/>
        </GameScreen>
      );
    }

    if (question.genre) {
      return (
        <GameScreen type={GameType.GENRE}>
          <QuestionGenreScreenWrapped question={questions[step]} onAnswer={onAnswer}/>
        </GameScreen>
      );
    }

    return null;
  }

  render() {
    const {questions, onAnswer} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderScreen()}
          </Route>
          <Route exact path="/dev-genre">
            <GameScreen type={GameType.GENRE}>
              <QuestionGenreScreenWrapped question={questions[0]} onAnswer={onAnswer}/>
            </GameScreen>
          </Route>
          <Route exact path="/dev-artist">
            <GameScreen type={GameType.ARTIST}>
              <QuestionArtistScreenWrapped question={questions[1]} onAnswer={onAnswer}/>
            </GameScreen>
          </Route>
          <Route exact path="/dev-auth">
            <AuthorizationScreen onLogin={() => {}} onPlayMoreClick={() => {}}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  mistakes: PropTypes.number.isRequired,
  maxMistakes: PropTypes.number.isRequired,
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
  step: PropTypes.number.isRequired,
  isDataLoadErrorShown: PropTypes.bool.isRequired,
  authStatus: PropTypes.string.isRequired,
  onWelcomeButtonClick: PropTypes.func.isRequired,
  onAnswer: PropTypes.func.isRequired,
  onPlayMoreClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  step: getStep(state),
  maxMistakes: getMaxMistakes(state),
  mistakes: getMistakes(state),
  questions: getQuestions(state),
  isDataLoadErrorShown: getDataLoadStatus(state),
  authStatus: getAuthStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeButtonClick() {
    dispatch(ActionCreator.incrementStep());
  },
  onAnswer(question, answer) {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistakes(question, answer));
  },
  onPlayMoreClick() {
    dispatch(ActionCreator.resetGame());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
