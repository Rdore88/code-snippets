import React, {Component} from 'react'
import {createUser} from '../../actions/actions.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

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
    let userObj = {
      user: this.state
    }
    this.props.createUser(userObj)
  }
  componentDidUpdate(){
    if (this.props.user) {
      this.props.history.push('/')
    }
  }

  render(){
    let errorMessage=[];
    if (this.props.userErrors) {
      errorMessage = this.props.userErrors.map(function (error){
        return(
          <p>{error}</p>
        )
      })
    }
    return(
      <div className="submit-page">
        <div>
          {errorMessage}
        </div>
        <form onSubmit={this.handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input className="form-control" type="text" name="name" onChange={this.handleName} value={this.state.username} />
          </div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" onChange={this.handleEmail} value={this.state.email} />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" onChange={this.handlePassword} value={this.state.password} />
          <label htmlFor="password_confirmation">Password Confirmation:</label>
          <input type="password" name="password_confirmation" onChange={this.handlePasswordConfirmation} value={this.state.password_confirmation} />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

}


function mapStateToProps(state){
  return{
    user: state.user.current_user,
    userErrors: state.user.user_errors
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    createUser: createUser
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
