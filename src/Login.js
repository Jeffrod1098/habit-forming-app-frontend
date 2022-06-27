import React from "react";
import { useState } from "react";
import axios from "axios";

const Login = () =>{

    const [userName, setUserName] = useState({})
    const [email, setEmail] = useState({})
    const [password, setPassword] = useState({})

    const click = () => {
        axios.post('http://localhost:4000/', {
            userName: userName,
            email: email,
            password: password
        })
    }

    const handleUserNameChange = event => {
        setUserName(event.target.value)
    }
    const handleEmailChange = event => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = event => {
        setPassword(event.target.value)
    }
    return(
        <div>
        <div className='nav border-solid border-4 border-slate-300 bg-slate-300'>
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
        {/* under nav bar  */}
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
            <form onSubmit={click}>
                <div class="form-group mb-6">
                    <input onChange={handleUserNameChange} type="text" class="form-control block
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
                        placeholder="User Name" />
                </div>
                <div class="form-group mb-6">
                    <input onChange={handleEmailChange} type="email" class="form-control block
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
                        placeholder="Email address" />
                </div>
                <div class="form-group mb-6">
                    <input onChange={handlePasswordChange} type="password" class="form-control block
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
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
                        placeholder="Password" />
                </div>
                <button type="submit" class="
  w-full
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
  ease-in-out">Sign up</button>
            </form>
        </div>
    </div>
    )
}

export default Login