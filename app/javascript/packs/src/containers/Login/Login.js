import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userLogin} from '../../actions/actions.js'

class LogIn extends Component{
  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handlePassword = (e) =>{
    this.setState({password: e.target.value})
  }
  handleEmail = (e) => {
    this.setState({email: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this);
    let userObj = {
      user: this.state
    }

    console.log(this.props.userLogin(userObj));

  }

  componentDidUpdate(){
    if (this.props.user) {
      this.props.history.push('/')
    }
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} className="login-form">
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" onChange={this.handleEmail} value={this.state.email} />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" onChange={this.handlePassword} value={this.state.password}/>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

function mapStateToProps(state){
  return{
    user: state.user.current_user
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    userLogin: userLogin
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
