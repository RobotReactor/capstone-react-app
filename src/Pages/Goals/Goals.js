import React, { useState } from 'react';
import {useEffect} from 'react';
import MainScreen from '../../Components/MainScreen/MainScreen';
import { variables } from '../../Components/Variables';
import $ from 'jquery';


const Goals = () => {

    const muscleGroup_Arms = 'Arms';
    const muscleGroup_Legs = 'Legs';

    const [data, setData] = useState([]);
    let [searchTerm] = useState(muscleGroup_Arms);

    const getData=()=>{
        fetch(variables.API_URL+'exercises'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            setData(myJson)
          });
      }

    useEffect(()=>{
        getData()
      },[])

      const current = new Date();
      var month = current.getMonth() + 1;
      if(month <= 9)
          month = '0'+month;  
      const dates = `${month}/${current.getDate()}/${current.getFullYear()}`


  return (
    <MainScreen>
    <select class="form-select" aria-label="Default select example">
      {data.filter((val)=>{
        if(searchTerm == ""){
          return val
        }
        else if(val.muscle_group_name.toString().includes(searchTerm)){
          return val;
        }
      }).map((val,key)=>{
        return <>{data && data.length > 0 && <option>{val.exercise_name}</option>}</>
        })} 
    </select>  
      
        <h1>{dates}</h1>
    </MainScreen>
  )
}

export default Goals;