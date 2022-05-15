import React, { Component } from 'react';
import { variables } from '../../Components/Variables';

export class AddWorkout extends Component {

  constructor(props){
    super(props);

    this.state={
      exercise:[]
    }
  }

  refreshList() {
    fetch(variables.API_URL+'exercise')
    .then(response=>response.json())
    .then(data=>{
      this.setState({exercise:data});
    });
  }

  componentDidMount() {
    this.refreshList();
  }
  render() {

    const {
      exercise
    }=this.state;

      return (

        <div id="main-screen" className="main-screen">
            <table className='table table-striped'>
              <thread>
                <tr>
                  <th>
                    id
                  </th>
                  <th>
                    exerciseID
                  </th>
                  <th>
                    setNumber
                  </th>
                  <th>
                    reps
                  </th>
                  <th>
                    weight
                  </th>
                  <th>
                    userID
                  </th>
                  <th>
                    workoutDate
                  </th>
                </tr>
              </thread>
              <tbody>
                {exercise.map(exercise=>
                  <tr key={exercise.id}>
                    <td>{exercise.id}</td>
                    <td>{exercise.exerciseID}</td>
                    <td>{exercise.setNumber}</td>
                    <td>{exercise.reps}</td>
                    <td>{exercise.weight}</td>
                    <td>{exercise.userID}</td>
                    <td>{exercise.workoutDate}</td>
                  </tr>
                  )}
              </tbody>
            </table>
        </div>
      )
   }
}

export default AddWorkout;