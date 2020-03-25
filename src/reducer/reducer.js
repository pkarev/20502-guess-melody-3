import {combineReducers} from 'redux';
import {reducer as data} from './data/data.js';
import {reducer as game} from './game/game.js';
import {reducer as user} from './user/user';
import NameSpace from './name-space.js';

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.GAME]: game,
  [NameSpace.USER]: user,
});
