import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import gameSettings from './mocks/game-settings.js';
import questions from './mocks/questions.js';

ReactDOM.render(
    <App errorsCount={gameSettings.ERRORS_COUNT} questions={questions}/>,
    document.querySelector(`#root`)
);
