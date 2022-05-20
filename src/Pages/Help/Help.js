import React, { Component } from 'react';
import MainScreen from '../../Components/MainScreen/MainScreen';
import { variables } from '../../Components/Variables';

export class Help extends Component {

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

          return (
    
            <MainScreen>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Birthdate</th>
                            <th>Height</th>
                            <th>Current Weight</th>
                            <th>Goal Weight</th>
                            <th>Email</th>
                            <th>Track Weight?</th>
                            <th>Weight Check Freq</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Check Tempo</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(users=>
                            <tr key={users.user_id}>
                                <td>{users.user_id}</td>
                                <td>{users.birthdate}</td>
                                <td>{users.height}</td>
                                <td>{users.current_weight}</td>
                                <td>{users.goal_weight}</td>
                                <td>{users.email}</td>
                                <td>{users.track_weight}</td>
                                <td>{users.weight_check_frequency}</td>
                                <td>{users.first_name}</td>
                                <td>{users.last_name}</td>
                                <td>{users.check_tempo}</td>
                                <td>{users.password}</td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </MainScreen>
          )
    }
}

export default Help;