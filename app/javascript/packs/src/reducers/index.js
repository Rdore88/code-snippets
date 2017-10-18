import update from 'immutability-helper'

const initial_state = {
  current_user: null,
  code_snippets: []
}

const reducer = function(state = initial_state, action){
  switch (action.type) {
    case "SET_USER":
      return update(state, {
        current_user: {
          $set: action.payload
        }
      });
    case "LOGOUT":
      return update(state, {
        current_user: {
          $set: null
        }
      });
    default:
      return state;
  }
}
