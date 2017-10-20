import {combineReducers} from 'redux';
import {user} from './user';
import {codeSnippets} from './snippets';

export default combineReducers({
  user,
  codeSnippets
})
