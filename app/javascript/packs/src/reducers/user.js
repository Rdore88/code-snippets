import update from 'immutability-helper'

const initial_state = {
  current_user: null,
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
    default:
      return state;
  }
}

export default user
