import React from "react";
import axios from 'axios'
import { useState } from 'react'
import habitImg from "./image/habits.jpg"
import Nav from "./Nav";


const CreateHabit = () => {

    const [habitName, setHabitName] = useState({})
    const [habitDescription, setHabitDescription] = useState({})
    const [habitCategory, setHabitCategory] = useState({})

    const click = () => {
        axios.post('http://localhost:4000/',{
            habitName: habitName,
            habitDescription: habitDescription,
            habitCategory: habitCategory
        })
    }
    // const backgroundImageStyle = {
    //     backgroundImage: `url("${habitImg}")`,
    //     backgroundSize: "cover",
    //     width: "100vw",
    //     height: "100vh",
    // }

    const handleHabitNameChange = event => {
        setHabitName(event.target.value)
    }
    const handleHabitDescriptionChange = event => {
        setHabitDescription(event.target.value)
    }
    const handleHabitCategoryChange = event => {
        setHabitCategory(event.target.value)
    }
    const handleSubmit = event => {
        event.preventDefault()
        click()
    }
    const backgroundImageStyle = {
        backgroundImage: `url("${habitImg}")`,
        backgroundSize: "cover",
        width: "100vw",
    }

    return (
        
    <div style={backgroundImageStyle}>
        <Nav />
        {/* NavBar */}
        <div className='App' >
        <h1 className="text-5xl text-slate-700 font-bold"> Create a MyHabits</h1>
        {/* Heading */}
        <div className="form block p-6 rounded-lg shadow-lg bg-white max-w-md">
            <form onSubmit={click}>
                <div className="form-group mb-6">
                    <input onChange={handleHabitNameChange} type="text" className="form-control block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
                        placeholder="Habit Name" />
                </div>
                <div className="form-group mb-6">
                    <input onChange={handleHabitDescriptionChange} type="text" className="form-control block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
                        placeholder="Brief Description of Habit" />
                </div>
                
                <button type="submit" className="
  w-full
  px-6
  py-2.5
  bg-blue-600
  text-white
  font-medium
  text-xs
  leading-tight
  uppercase
  rounded
  shadow-md
  hover:bg-blue-700 hover:shadow-lg
  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
  active:bg-blue-800 active:shadow-lg
  transition
  duration-150
  ease-in-out">Create</button>
            </form>
        </div>
  
        </div>
    </div>
    )
}

export default CreateHabit