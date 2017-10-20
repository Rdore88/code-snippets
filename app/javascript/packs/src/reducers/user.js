import update from 'immutability-helper'

const initial_state = {
  current_user: null,
  user_errors: null
}

const user = function(state = initial_state, action){
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
    case "SET_USER_ERRORS":
      return update(state, {
        user_errors: {
          $set: action.payload
        }
      });
    default:
      return state;
  }
}

export {user}
