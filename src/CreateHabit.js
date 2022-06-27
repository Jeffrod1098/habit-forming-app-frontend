import React from "react";
import axios from 'axios'
import { useState } from 'react'


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

    const handleHabitNameChange = event => {
        setHabitName(event.target.value)
    }
    const handleHabitDescriptionChange = event => {
        setHabitDescription(event.target.value)
    }
    const handleHabitCategoryChange = event => {
        setHabitCategory(event.target.value)
    }

    return (
        <div className="habits" >
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
        placeholder="Habit Description" />
            <button onClick={click} class="btn btn-primary">Create</button>
            </form>
        </div>
    )
}

export default CreateHabit