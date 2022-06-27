import React from "react";
import "./HabitList.css"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Nav from "./Nav"
import habitImg from "./image/habits.jpg"


const HabitList = () => {

        const backgroundImageStyle = {
            backgroundImage: `url("${habitImg}")`,
            backgroundSize: "cover",
            width: "100vw",
        }

    // const [habits,SetHabits]= ({})

    // React.useEffect(() => {
    //     async function getHabits(){
    //         const response = await axios.get('http://localhost:4000/habits')
    //         SetHabits(response.data)
    //     }
    //     getHabits()
    // },[])

    return(
        <div className='App' style={backgroundImageStyle}>
            <Nav/>
            {/* {
                habits.map((habit) => {
                    return(
                        <div key={habit.id}>
                            <h2>{habit.name}</h2>
                            <h3>Description:</h3>
                            <p>{habit.description}</p>
                        </div>
                    )
                })
            } */}
        </div>
    )
}

export default HabitList