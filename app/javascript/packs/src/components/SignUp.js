import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {setUser} from '../actions/actions.js'

export default class SignUp extends Component{
  constructor(props){
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordConfirmationChange = this.handlePasswordConfirmationChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e){
    this.setState({name: e.target.value})
  }
  handleEmailChange(e){
    this.setState({email: e.target.value})
  }
  handlePasswordChange(e){
    this.setState({password: e.target.value})
  }
  handlePasswordConfirmationChange(e){
    this.setState({password_confirmation: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()

    }



  render(){
    return(
      <form onSubmit={this.handleSubmit} className='signup-form'>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" onChange={this.handleNameChange} value={this.state.name} />
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" onChange={this.handleEmailChange} value={this.state.email} />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" onChange={this.handlePasswordChange} />
        <label htmlFor="password_confirmation">Password Confirmation:</label>
        <input type="password" name="password_confirmation" onChange={this.handlePasswordConfirmationChange} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

function mapStatetoProps(state){
  return (user: state.user)
}
