import React from "react";
import axios from "axios";
import { useState } from "react";
import habitImg from "./image/habits.jpg";
import Nav from "./Nav";
import "./Createhabit.css";
import { data } from "autoprefixer";

const CreateHabit = (props) => {
  const [habitName, setHabitName] = useState({});
  const [goal, setGoal] = useState({});

  const click = () => {
    axios.post("http://localhost:4000/userHabits", {
      username: props.userName,    
      habitName: habitName,
      goal: goal,
    });
  };
  // const backgroundImageStyle = {
  //     backgroundImage: `url("${habitImg}")`,
  //     backgroundSize: "cover",
  //     width: "100vw",
  //     height: "100vh",
  // }

  const handleHabitNameChange = (event) => {
    setHabitName(event.target.value);
  };
  const handleGoalChange = (event) => {
    setGoal(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:4000/userHabits", data)
    .then(res => {
      console.log(res);
    });
    click();
  };
  // const backgroundImageStyle = {
  //     backgroundImage: `url("${habitImg}")`,
  //     backgroundSize: "cover",
  //     width: "100vw",
  // }

  const backgroundImageStyle = {
    backgroundImage: `url("${habitImg}")`,
    backgroundSize: "cover",
    width: "100vw",
  };

  return (
    
    <div style={backgroundImageStyle}>
      <Nav />
      {/* NavBar */}
      <div className="App">
        <h1 className="text-5xl text-slate-700 font-bold">
          {" "}
          Create a MyHabits
        </h1>
        {/* Heading */}
        <div className="form block p-6 rounded-lg shadow-lg bg-white max-w-md">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-6">
              <input
                onChange={handleHabitNameChange}
                type="text"
                className="form-control block w-full   px-3 py-1.5  text-base    font-normal  text-gray-700   bg-white bg-clip-padding   border border-solid border-gray-300 rounded  transition ease-in-out   m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput125"
                placeholder="Habit Name"
              />
            </div>
            <div className="form-group mb-6">
              <input
                onChange={handleGoalChange}
                type="text"
                className="form-control block w-full
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
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput126"
                placeholder="Brief Description of Habit"
              />
            </div>

            <div className="flex justify-center">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label inline-block text-gray-800">
                  Mon
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label inline-block text-gray-800">
                  Tue
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label inline-block text-gray-800">
                  Wed
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label inline-block text-gray-800">
                  Thu
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label inline-block text-gray-800">
                  Fri
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label inline-block text-gray-800">
                  Sat
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label inline-block text-gray-800">
                  Sun
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              Create
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default CreateHabit;
