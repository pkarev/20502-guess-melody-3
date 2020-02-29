import React from 'react';
import PropTypes from 'prop-types';
import {GameType} from '../../consts.js';

const GameScreen = (props) => {
  const {type, children} = props;

  return (
    <section className={`game game--${type}`}>
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

      {children}
    </section>
  );
};

GameScreen.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]),
};

export default GameScreen;
