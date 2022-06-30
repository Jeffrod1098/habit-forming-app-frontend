import React from "react";
import habitImg from "./image/habits.jpg"
import "./Landing.css"
import Nav from "./Nav"
import { Link } from "react-router-dom";


const Landing = () => {
    const backgroundImageStyle = {
        backgroundImage: `url("${habitImg}")`,
        backgroundSize: "cover",
        width: "100vw",
        
    }
    return (
        <div>
            <div className='App' style={backgroundImageStyle}>
                <Nav />
                <div data-aos='fade-up' data-aos-duration='3000' className='welcome'>
                    <h1 className="text-5xl text-slate-700 font-bold">Welcome to  MyHabits</h1>
                    <h2 className='text-xl text-slate-700'>A web app that helps you keep track of your habits and create new ones.</h2>
                    <Link to="/createUser">
                        <div>
                            <div className='text-xl text-slate-800 font-bold hover:text-sky-600'>Click Here To Sign Up </div>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Landing