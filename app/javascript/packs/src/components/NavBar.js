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
      <div>
        <NavLink activeClassName="selected" className="navlink" to="/signup">Sign Up</NavLink>
        <NavLink activeClassName="selected" className="navlink" to="/login">Login</NavLink>
      </div>
    } else {
      changeNavBar =
      <div>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    }
    return (
      <nav className="upperNavbar">
        <NavLink activeClassName="selected" className="navlink" to="/">Home</NavLink>
        {changeNavBar}
      </nav>
    )
  }
}

function mapStateToProps(state){
  return{
    user: state.current_user
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    logout: logout
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
