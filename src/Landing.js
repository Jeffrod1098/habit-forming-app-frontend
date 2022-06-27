import React from "react";
// import '../src/App.css'
import habitImg from "./image/habits.jpg"


const Landing = () => {
    const backgroundImageStyle = {
        backgroundImage: `url("${habitImg}")`,
        backgroundSize: "cover",
        width: "100vw",
    }
    return (
        <div>
            <div className='App' style={backgroundImageStyle}>
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
                <div data-aos='fade-up' data-aos-duration='3000' className='welcome'>
                    <h1 className="text-5xl text-slate-700 font-bold">Welcome to  MyHabits</h1>
                    <h2 className='text-xl text-slate-700'>A web app that helps you keep track of your habits and create new ones.</h2>
                    <button className='bg-slate-500 rounded-full hover:bg-sky-700'>Sign Up </button>
                </div>

            </div>
        </div>
    )
}

export default Landing