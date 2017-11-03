import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import '../styles/NavBar.css';
import {connect} from 'react-redux';
import {logout} from '../actions/actions.js'
import {bindActionCreators} from 'redux'

class NavBar extends Component {
  constructor(props){
    super(props)
  }

  handleLogout = e => {
    this.props.logout()
  }

  render(){
    let changeNavBar;
    if (!this.props.user) {
      changeNavBar =
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <NavLink activeClassName="" className="nav-link" to="/">Home</NavLink>
          </li>
          <li class="nav-item">
            <NavLink activeClassName="" className="nav-link" to="/signup">Sign Up</NavLink>
          </li>
          <li class="nav-item">
            <NavLink activeClassName="" className="nav-link" to="/login">Login</NavLink>
          </li>
        </ul>
      <span class="navbar-text">
        Profile
      </span>
    </div>
  </nav>
    } else {
      changeNavBar =
      <div>
      <NavLink activeClassName="active" className="nav-link" to="/">Home</NavLink>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    }
    return (
      <div className="upperNavbar">
        {changeNavBar}
      </div>
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
    logout: logout
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
