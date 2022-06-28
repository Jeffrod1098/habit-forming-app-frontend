import React from "react";
import axios from 'axios'
import { useState } from 'react'
import habitImg from "./image/habits.jpg"
import Nav from "./Nav";
import "./UserPage.css"

const UserPage = () => {

    const backgroundImageStyle = {
        backgroundImage: `url("${habitImg}")`,
        backgroundSize: "cover",
        width: "100vw",
    }

    return(
        <div className="App" style={backgroundImageStyle}>
            <Nav />
            <h1 className="text-5xl text-slate-700 font-bold">Welcome "User Name"</h1>
        </div>
    )
}

export default UserPage