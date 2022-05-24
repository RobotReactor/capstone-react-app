import { getAccordionDetailsUtilityClass } from '@mui/material';
import React, { Component } from 'react';
import MainScreen from '../../Components/MainScreen/MainScreen';
import { variables } from '../../Components/Variables';

export class Help extends Component {

    constructor(props){
        super(props);
    
        this.state={
          muscles:[]
        }
      }
    
      refreshList() {
        fetch(variables.API_URL+'muscles')
        .then(res=>res.json())
        .then(data=>{
          this.setState({muscles:data});
        });
      }
    
      componentDidMount() {
        this.refreshList();
      }
      render() {
    
        const {
          muscles
        }=this.state;

          return (
    
            <MainScreen>
               
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Biceps</th>
                            <th>Triceps</th>
                        </tr>
                    </thead>
                    <tbody>
                        {muscles.map(muscles=>
                            <tr key={muscles.targeted_muscles_id}>
                                <td>{muscles.biceps}</td>
                                <td>{muscles.triceps}</td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </MainScreen>
          )
    }
}

export default Help;