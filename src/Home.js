import React from "react";
import purecss from "purecss";

const Home = () => {
    return(
        <div>
            <div>
                <h1>Welcome to your new habit</h1>
            </div>
            <div>
                <h3>About:</h3>
                <p>This is a habit forming app, that let's you track and create habits.(Good ones hopefully.)
                    To begin click one of the buttons below that pertain to you.
                </p>
            </div>
            <div className="buttonsContianer">
                <button class="pure-button pure-button-active">Register</button>
                <button class="pure-button pure-button-active">Login</button>
                <button class="pure-button pure-button-active">Explore</button>
            </div>

        </div>
    )
}

export default Home