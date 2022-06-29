import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">
        <div className="logo">
          <h3 className="text-3xl text-slate-700">MyHabits</h3>
        </div>
      </Link>

      <nav className="flex justify-center space-x-4">
        <Link to="/home">
          <p className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
            Home
          </p>
        </Link>
        <Link to="/createHabit">
          <p className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
            Create Habit
          </p>
        </Link>
        <Link to="/login">
          <p className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
            Login
          </p>
        </Link>
        <Link to="/habitList">
          <p className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
            Habits
          </p>
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
