import React from 'react';
import PropTypes from 'prop-types';

const GameWinScreen = ({correctAnswers, wrongAnswers, onPlayMoreClick}) => (
  <section className="result">
    <div className="result__logo">
      <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
    </div>
    <h2 className="result__title">Вы настоящий меломан!</h2>
    <p className="result__total">Вы ответили правильно на {correctAnswers} вопросов и совершили {wrongAnswers} ошибки</p>
    <button className="replay" type="button" onClick={onPlayMoreClick}>Сыграть ещё раз</button>
  </section>
);

GameWinScreen.propTypes = {
  correctAnswers: PropTypes.number.isRequired,
  wrongAnswers: PropTypes.number.isRequired,
  onPlayMoreClick: PropTypes.func.isRequired
};

export default React.memo(GameWinScreen);
