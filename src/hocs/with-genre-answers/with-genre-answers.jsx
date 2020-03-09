import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withGenreAnswers = (Component) => {
  class WithGenreAnswers extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        answers: [false, false, false, false],
      };

      this._handleAnswerOptionChange = this._handleAnswerOptionChange.bind(this);
      this._handleAnswer = this._handleAnswer.bind(this);
    }

    _handleAnswerOptionChange(value, index) {
      const {answers} = this.state;

      this.setState({
        answers: [
          ...answers.slice(0, index),
          value,
          ...answers.slice(index + 1)
        ]
      });
    }

    _handleAnswer() {
      const {onAnswer, question} = this.props;
      const {answers} = this.state;

      onAnswer(question, answers);
    }

    render() {
      return (
        <Component
          {...this.props}
          onAnswerOptionChange={this._handleAnswerOptionChange}
          onAnswer={this._handleAnswer}
        />
      );
    }
  }

  WithGenreAnswers.propTypes = {
    question: PropTypes.shape({
      genre: PropTypes.string,
      tracks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        genre: PropTypes.string,
        src: PropTypes.string,
      })),
    }),
    onAnswer: PropTypes.func.isRequired,
  };

  return WithGenreAnswers;
};

export default withGenreAnswers;
