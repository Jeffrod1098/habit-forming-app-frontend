import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import habitImg from "./image/habits.jpg";
import Nav from "./Nav";
import "./UserPage.css";
import Draggable from "react-draggable";
import { Link } from "react-router-dom";

const UserPage = (props) => {
  const backgroundImageStyle = {
    backgroundImage: `url("${habitImg}")`,
    backgroundSize: "cover",
    width: "100vw",
  };

  const [userHabits, setUserHabits] = useState([]);
  // const [deleteHabits, setDeleteHabits] = useState([]);

  React.useEffect(() => {
    async function getUserHabits() {
      const response = await axios.get(
        "https://myhabitsproject.herokuapp.com/userHabits/"
      );
      //  console.log(response.data)
      setUserHabits(response.data);
    }
    getUserHabits();
  }, []);
  async function deleteHabits(id) {
    const response = await axios.delete(
      `https://myhabitsproject.herokuapp.com/userHabits/${id}`
    );
    console.log(response.data);
    // setDeleteHabits(response.data);
  }
  // React.useEffect(() =>{
  //   deleteHabits();
  // }, [])

  const user = props.userName;
  // console.log(userHabits);
  const nameMatch = userHabits.map((users) => {
    console.log(users);
    if (user == users.username) {
      return (
        <Draggable>
          <div className="flex justify-center">
            <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
              <div className="py-3 px-6 border-b border-gray-300">
                {users.habitName}
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-base mb-4">{users.goal}</p>
                <button
                  onClick={() => deleteHabits(users._id)}
                  type="button"
                  className="  w-full
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
ease-in-out"
                >
                  Delete
                </button>
                <Link to="/EditHabit/:id">
                  <button
                    type="button"
                    className="  w-full
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
ease-in-out"
                  >
                    EDIT
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Draggable>
      );
    }
  });

  return (
    <div className="App" style={backgroundImageStyle}>
      <Nav />
      <h1 className="text-5xl text-slate-700 font-bold">
        Welcome {props.userName}
      </h1>
      <div className="userCard">
        <div>{nameMatch}</div>
      </div>
    </div>
  );
};

export default UserPage;
