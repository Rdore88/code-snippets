import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Home extends Component {
  constructor(props){
    super(props)
    console.log(this.props);
  }
  render(){
    return(
      <div className='home'>
        <p>This is home!!!</p>
        <p>Welcome {this.props.user.username}</p>
      </div>
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
