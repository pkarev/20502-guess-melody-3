import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import QuestionArtistScreen from '../question-artist-screen/question-artist-screen.jsx';
import QuestionGenreScreen from '../question-genre-screen/question-genre-screen.jsx';

const welcomeButtonHandler = () => {};

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {errorsCount, questions} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <WelcomeScreen
              errorsCount={errorsCount}
              onWelcomeButtonClick={welcomeButtonHandler}
            />
          </Route>
          <Route exact path="/genre">
            <QuestionGenreScreen question={questions[0]}/>
          </Route>
          <Route exact path="/artist">
            <QuestionArtistScreen question={questions[1]}/>
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
  ])),
};

export default App;
