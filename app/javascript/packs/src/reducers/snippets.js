import update from 'immutability-helper';

const initial_state = {
  code_snippets: []
}

const codeSnippets = function(state = initial_state, action){
  switch(action.type){
    case "SET_SNIPPETS":
      return update(state, {
        code_snippets: {
          $set: action.payload
        }
      });
      default:
        return state;
  }
}

export {codeSnippets}
