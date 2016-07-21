import { combineReducers } from 'redux';
import trips from './tripReducer';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  trips,
  ajaxCallsInProgress
});

export default rootReducer;