import React, {Component} from 'react';

export default class LogIn extends Component{
  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePasswordChange(e){
    this.setState({password: e.target.value})
  }
  handleEmailChange(e){
    this.setState({email: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    var payload = {
      user: {
        email: this.state.email,
        password: this.state.password
      }
    }
    fetch('api/authorization',{
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then( (response) => {
      return response.json()
    }).then( (result) => {
      if (result.redirect) {
        this.contect.router.history.push({
          pathname: '/',
          state: {auth_token: result.auth_token}
        })
      }
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} className="login-form">
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" onChange={this.handleEmailChange} value={this.state.name} />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" onChange={this.handlePasswordChange} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
LogIn.contextTypes = {
  router: React.PropTypes.object.isRequired
}
