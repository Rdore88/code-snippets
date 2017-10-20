import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Home extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
        <p>This is home!!!</p>
    )
  }
}

function  mapStateToProps(state){
  return{
    user: state.current_user
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
