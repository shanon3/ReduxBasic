import {combineReducers} from 'redux';
import countReducer from './countReducers';

const allReducers = combineReducers({
  count: countReducer,
});

export default allReducers;
