import React from "react";
import axios from 'axios'
import { useState } from 'react'
import habitImg from "./image/habits.jpg"


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
        <div className='nav'>
                    <div className="logo">
                        <h3 className='text-3xl text-slate-700'>MyHabits</h3>
                    </div>
                    <nav class="flex justify-center space-x-4">
                        <a href="/home" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
                        <a href="/team" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Team</a>
                        <a href="/login" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Login</a>
                        <a href="/explore" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Explore</a>
                    </nav>
                </div>
        <div className='App' >
            <h1 className="today">Today's habits/goals</h1>
            <form onSubmit={click}>
            <input onChange={handleHabitNameChange} type="name" class="form-control block
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
            <input onChange={handleHabitDescriptionChange} type="Habit Category" class="form-control block
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
        placeholder="Habit Category" />
            <input onChange={handleHabitCategoryChange} type="Habit Description" class="form-control block
        w-full
        px-3
        text-base
        font-normal
        text-black-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput127"
        placeholder="Habit Description" />
          <button onClick={handleSubmit} type="submit" class="createbtn">Create a habit</button>
            </form>
        </div>
    </div>
    )
}

export default CreateHabit