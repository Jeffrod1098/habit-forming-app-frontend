import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import habitImg from "./image/habits.jpg";
import Nav from "./Nav";
import { Navigate } from "react-router-dom";


const backgroundImageStyle = {
  backgroundImage: `url("${habitImg}")`,
  backgroundSize: "cover",
  width: "100vw",
};

const EditHabit = (props) => {
  const [habitName, setHabitName] = useState({});
  const [goal, setGoal] = useState({});


  const navigate = Navigate()

const id = useParams().id
console.log(id)

  const click = (e) => {
    e.preventDefault();
    axios.put(
      `https://myhabitsproject.herokuapp.com/userHabits/${id}`,
      {
        username: props.userName,
        habitName: habitName,
        goal: goal,
      }).then((home) => {
        navigate("/home", { replace: true });
      })

  };

  const handleHabitChange = (event) => {
    setHabitName(event.target.value);
  };
  const handleGoalChange = (event) => {
    setGoal(event.target.value);
  };

  return (
    <div style={backgroundImageStyle}>
      <Nav />

      <div className="App">
        <h1 className="text-5xl text-slate-700 font-bold"> Edit MyHabits</h1>

        <div className="form block p-6 rounded-lg shadow-lg bg-white max-w-md">
          <form onSubmit={click}>
            <div className="form-group mb-6">
              <input
                onChange={handleHabitChange}
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal    text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput125"
                placeholder="Habit Name"
              />
            </div>
            <div className="form-group mb-6">
              <input
                onChange={handleGoalChange}
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput126"
                placeholder="Brief Description of Habit"
              />
            </div>

            
            <button
              type="submit" className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              Edit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditHabit;
