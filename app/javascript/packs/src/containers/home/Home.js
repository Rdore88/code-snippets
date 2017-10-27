import React, { Component } from 'react';
import {connect} from 'react-redux';

class Home extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    if (!this.props.user) {
      this.props.history.push('/signup')
    }
  }

  render(){
    return(
      <p>This is Home!</p>
    )
  }
}


function mapStateToProps(state){
  return{
    user: state.user.current_user

  }
}

export default connect(mapStateToProps)(Home)
