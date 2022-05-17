import React, { Component } from 'react';
import { variables } from '../../Components/Variables';

export class CurrentUser extends Component {

  constructor(props){
    super(props);

    this.state={
      users:[]
    }
  }

  refreshList() {
    fetch(variables.API_URL+'users')
    .then(response=>response.json())
    .then(data=>{
      this.setState({users:data});
    });
  }

  componentDidMount() {
    this.refreshList();
  }
  render() {

    const {
      users
    }=this.state;

    const currUser = users.
    

      return (

        <div>
            <h1></h1>
        </div>
        
      )
   }
}

export default CurrentUser;