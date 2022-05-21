import { type } from '@testing-library/user-event/dist/type';
import React, { Component } from 'react';
import { variables } from '../../Components/Variables';

export class AddWorkout extends Component {

    constructor(props){
        super(props);

        this.state={
        sessions:[]
        };
    }

    refreshList() {
        fetch(variables.API_URL+'sessions')
        .then(response=>response.json())
        .then(data=>{
        this.setState({sessions:data});
        });
    }

    componentDidMount() {
        this.refreshList();
    }
    render() {

    const {
        sessions
    }=this.state;

    const current = new Date();
    var month = current.getMonth() + 1;
    if(month <= 9)
        month = '0'+month;  
    const dates = `${month}/${current.getDate()}/${current.getFullYear()}`;

      return (

        <div id="main-screen" className="main-screen">
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Session</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Today's Date</th>
                    </tr>
                </thead>
                <tbody>
                    {sessions.map(sessions=>
                        <tr key={sessions.session}>
                            <td>{sessions.session}</td>
                            <td>{sessions.session_date}</td>
                            <td>{sessions.session_time}</td>
                            <td>{dates}</td>
                        </tr>
                    )}
                </tbody>
            </table>



        </div>
      )
   }
}

export default AddWorkout;