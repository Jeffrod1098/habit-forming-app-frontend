import React from "react";
import "./HabitList.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Nav from "./Nav";
import habitImg from "./image/habits.jpg";
import Draggable from "react-draggable";
import { data } from "autoprefixer";

const HabitList = (props) => {
  const backgroundImageStyle = {
    backgroundImage: `url("${habitImg}")`,
    backgroundSize: "cover",
    width: "100vw",
  };

  const [habits, setHabits] = useState([]);
  const [goal, setGoal] = useState({});
  const [habitName, setHabitName] = useState({});

  const click = (habitName, goal) => {
    console.log("clicked add to list");
    axios.post("https://myhabitsproject.herokuapp.com/userHabits", {
      username: props.userName,
      habitName: habitName,
      goal: goal,
    })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  };

  React.useEffect(() => {
    async function getHabits() {
      const response = await axios.get(
        "https://myhabitsproject.herokuapp.com/habits"
      );
      //   console.log(response.data);
      setHabits(response.data);
    }
    getHabits();
  }, []);

  return (
    <div className="App" style={backgroundImageStyle}>
      <Nav />
      <h1 className="text-5xl text-slate-700 font-bold">Habit Inspiration</h1>
      {habits.map((habit) => {
        return (
          <Draggable>
            <div className="cardContainers">
              <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                <div className="py-3 px-6 border-b border-gray-300">
                  {habit.name}
                </div>
                <div className="p-6">
                  <p className="text-gray-700 text-base mb-4">
                    {habit.description}
                  </p>
                  <button
                    onClick={() => click(habit.name, habit.description)}
                    type="button"
                    className="  w-full px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline- focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">
                    Add to list
                  </button>
                </div>
              </div>
            </div>
          </Draggable>
        );
      })}
    </div>
  );
};

export default HabitList;
