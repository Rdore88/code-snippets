import React, {Component} from 'react';

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      auth_token: this.props.location.auth_token
    }
  }
  render(){
    return(
      <p>This is home!!!</p>
    )
  }
}
