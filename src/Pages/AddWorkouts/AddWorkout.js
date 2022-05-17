import React, { Component } from 'react';
import { variables } from '../../Components/Variables';

export class AddWorkout extends Component {

  constructor(props){
    super(props);

    this.state={
      exercises:[]
    }
  }

  refreshList() {
    fetch(variables.API_URL+'exercises')
    .then(response=>response.json())
    .then(data=>{
      this.setState({exercises:data});
    });
  }

  componentDidMount() {
    this.refreshList();
  }
  render() {

    const {
      exercises
    }=this.state;

    

      return (

        <div id="main-screen" className="main-screen">
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Exercise Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {exercises.map(exercises=>
                        <tr key={exercises.exercise_id}>
                            <td>{exercises.exercise_name}</td>
                            <td>{exercises.exercise_desc}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
      )
   }
}

export default AddWorkout;