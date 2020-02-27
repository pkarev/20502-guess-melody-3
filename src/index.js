import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/app.jsx';
import gameSettings from './mocks/game-settings.js';
import questions from './mocks/questions.js';
import {reducer} from './reducer.js';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App errorsCount={gameSettings.ERRORS_COUNT} questions={questions}/>,
    </Provider>,
    document.querySelector(`#root`)
);
