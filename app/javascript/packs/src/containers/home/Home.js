import React, { Component } from 'react';
import {connect} from 'react-redux';

class Home extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <p>This is Home!</p>
    )
  }
}


function mapStateToProps(state){
  return{
    user: state.current_user

  }
}

export default connect(mapStateToProps)(Home)
