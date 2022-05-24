import React, { Component } from 'react';
import { createAPIEndpoint, ENDPOINTS } from '../../api';
import { center } from '../../Components/CenterItem';

const examplePress = () => {
    console.log("Press");
    createAPIEndpoint(ENDPOINTS.workouts)
        .delete(7)
}

export class LogWorkout extends Component {

    render() {

      return (

        <div id="main-screen" className="main-screen">
            <button style = {center} onClick={examplePress}>Button</button>
        </div>

      )
   }
}

export default LogWorkout;