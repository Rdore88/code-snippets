import React, {Component} from 'react'
import {setUser} from '../actions/actions.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router'

class SignUp extends Component {
  constructor(props){
    super(props)

    this.state = {
      username: "",
      email: "",
      password: "",
      password_confirmation: ""
    }
  }

  handleName = e => {
    this.setState({username: e.target.value})
  }

  handleEmail = e => {
    this.setState({email: e.target.value})
  }

  handlePassword = e => {
    this.setState({password: e.target.value})
  }

  handlePasswordConfirmation = e => {
    this.setState({password_confirmation: e.target.value})
  }

  handleSubmit = e =>{
    e.preventDefault()
    var payload = {
      user:
        this.state
    }
    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then( (response) => {
      return response.json()
    }).then(
      (result) => {
        console.log(result);
      })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} className="signup-form">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" onChange={this.handleName} value={this.sate.username} />
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" onChange={this.handleEmail} value={this.state.email} />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" onChange={this.handlePassword} value={this.state.password} />
        <label htmlFor="password_confirmation">Password Confirmation:</label>
        <input type="password" name="password_confirmation" onChange={this.handlePasswordConfirmation} value={this.state.password_confirmation} />
        <br />
        <input type="submit" value="submit" />
      </form>
    )
  }

}




function mapStateToProps(state){
  const user = state.current_user
  return{
    user: user
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    setUser: setUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
