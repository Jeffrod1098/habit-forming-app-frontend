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

    const [habits,setHabits]= useState([])

    React.useEffect(() => {
        async function getHabits(){
            const response = await axios.get('http://localhost:4000/habits')
            console.log(response.data)
            setHabits(response.data)
        }
        getHabits()
    },[])
    
    {habits.map((habit) => {
        return (
            <div class="flex justify-center">
                <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                    <div class="py-3 px-6 border-b border-gray-300">
                        {habit.className}
                    </div>
                    <div class="p-6">
                        <p class="text-gray-700 text-base mb-4">
                            {habit.description}
                        </p>
                        <button type="button" class="  w-full
px-6
py-2.5
bg-red-600
text-white
font-medium
text-xs
leading-tight
uppercase
rounded
shadow-md
hover:bg-red-700 hover:shadow-lg
focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
active:bg-red-800 active:shadow-lg
transition
duration-150
ease-in-out">Delete</button>
                    </div>
                </div>
            </div>
        )
    })}


    return (
        <div className='App' style={backgroundImageStyle}>
            <Nav />
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

            {/* <div class="flex justify-center">
  <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
    <div class="py-3 px-6 border-b border-gray-300">
      Habit Name
    </div>
    <div class="p-6">
      <p class="text-gray-700 text-base mb-4">
        With supporting text below as a natural lead-in to additional content.
      </p>
      <button type="button" class="  w-full
  px-6
  py-2.5
  bg-red-600
  text-white
  font-medium
  text-xs
  leading-tight
  uppercase
  rounded
  shadow-md
  hover:bg-red-700 hover:shadow-lg
  focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
  active:bg-red-800 active:shadow-lg
  transition
  duration-150
  ease-in-out">Delete</button>
    </div>
  </div>
</div> */}

{habits.map((habit) => {
        return (
            <div class="flex justify-center">
                <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                    <div class="py-3 px-6 border-b border-gray-300">
                        {habit.name}
                    </div>
                    <div class="p-6">
                        <p class="text-gray-700 text-base mb-4">
                            {habit.description}
                        </p>
                        <button type="button" class="  w-full
px-6
py-2.5
bg-red-600
text-white
font-medium
text-xs
leading-tight
uppercase
rounded
shadow-md
hover:bg-red-700 hover:shadow-lg
focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
active:bg-red-800 active:shadow-lg
transition
duration-150
ease-in-out">Delete</button>
                    </div>
                </div>
            </div>
        )
    })}

        </div>
    )
}

export default HabitList