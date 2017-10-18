import React, {Component} from 'react'
import {setUser} from '../actions/actions.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

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
    this.setState({name: e.target.value})
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

  render(){
    return(
      <form onSubmit={this.handleSubmit} className='signup-form'
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
