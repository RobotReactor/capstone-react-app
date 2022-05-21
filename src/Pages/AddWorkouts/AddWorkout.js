import React, {Component } from 'react';
import MainScreen from '../../Components/MainScreen/MainScreen';
import { variables } from '../../Components/Variables';
import InfoModal from '../../Components/InfoModal';
import { center } from '../../Components/CenterItem';

export class AddWorkout extends Component {

    constructor(props){
        super(props);

        this.state={
            sessions: [],
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

    // const {
    //     sessions
    // }=this.state;

    const current = new Date();
    var month = current.getMonth() + 1;

    if(month <= 9)
        month = '0' + month;  

    const dates = `${month}/${current.getDate()}/${current.getFullYear()}`;

      return (
        <MainScreen>
           <InfoModal>
               
           </InfoModal>
           <h2></h2>
        </MainScreen>
      )
   }
}

export default AddWorkout;