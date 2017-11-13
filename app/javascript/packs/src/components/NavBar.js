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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/signup">Sign Up</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/login">Login</NavLink>
              </li>
            </ul>
          <span className="navbar-text">
            Profile
          </span>
        </div>
      </nav>
    } else {
      changeNavBar =
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link" to="/signup">Sign Up</NavLink>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={this.handleLogout}>Logout</button>
            </li>
          </ul>
        <span className="navbar-text">
          Profile
        </span>
      </div>
    </nav>
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
