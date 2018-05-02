import {names,persons} from './reducers';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({names, persons});

export default rootReducer;

