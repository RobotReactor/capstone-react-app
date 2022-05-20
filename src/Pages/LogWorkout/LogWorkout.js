import React, { Component } from 'react';
import { variables } from '../../Components/Variables';

export class LogWorkout extends Component {

    constructor(props){
        super(props);

        this.state={
        workouts:[]
        };
    }

    refreshList() {
        fetch(variables.API_URL+'workouts')
        .then(response=>response.json())
        .then(data=>{
        this.setState({workouts:data});
        });
    }

    componentDidMount() {
        this.refreshList();
    }
    render() {

    const {
        workouts
    }=this.state;

      return (

        <div id="main-screen" className="main-screen">
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Tempo id</th>
                        <th>User id</th>
                        <th>Exercise Name</th>
                        <th>Session</th>
                        <th>Set Number</th>
                        <th>Reps</th>
                        <th>Weight</th>
                        <th>Completed?</th>
                    </tr>
                </thead>
                <tbody>
                    {workouts.map(workouts=>
                        <tr key={workouts.workout_id}>
                            <td>{workouts.workout_id}</td>
                            <td>{workouts.tempo_id}</td>
                            <td>{workouts.user_id}</td>
                            <td>{workouts.exercise_name}</td>
                            <td>{workouts.session}</td>
                            <td>{workouts.set_number}</td>
                            <td>{workouts.reps}</td>
                            <td>{workouts.weight_lbs}</td>
                            <td>{workouts.completed}</td>
                        </tr>
                    )}
                </tbody>
            </table>



        </div>
      )
   }
}

export default LogWorkout;