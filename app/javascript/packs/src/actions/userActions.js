const setUser = (user) =>{
  return{
    type: "SET_USER",
    payload: user
  }
}

const logout = () => {
  return{
    type: "LOGOUT"
  }
}

const setUserErrors = (errors) =>{
  return{
    type: "SET_USER_ERRORS",
    payload: errors
  }
}

const createUser = (userInfo) =>{
  return(dispatch) => {
    console.log("createUser!");

    let options = {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch('/api/users', options)
      .then(res => {
        return res.json()
      }).then(json => {
        if (json.status === "failed"){
          return dispatch(setUserErrors(json.errors))
        } else {
          return dispatch(setUser(json.user))
        }
      }).catch(err => {
        return dispatch(setUserErrors(err.messages))
      })
  }
}

export {
  logout,
  createUser
}
