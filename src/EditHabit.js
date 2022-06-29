import { useState, useEffect } from "react";
import axios from "axios"
import {useParams} from 'react-router-dom'


const EditHabit = props => {

    const [habitName, setHabitName] = useState({});
  const [goal, setGoal] = useState({});
        
  const click = () => {
    axios.put(`http://localhost:4000/${userName}`, {
        username: props.username,
        habitName:habitName,
        goal: goal,
    });
  };

   
    return(

    )

    }

export default EditHabit
