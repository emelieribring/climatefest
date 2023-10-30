import React from "react";
import '../Styles/Register.css'



function Register() {
    return(
        <div className="backgroundDiv">

            <h1 className="formHeading">Register here</h1>
            <form>
                <div className="names">
                    <input type="text" id="firstName" name="firstName" placeholder="Förnamn" required></input>
                    <input type="text" id="lastName" name="lastName" placeholder="Efternamn" required></input>
                </div>

                <label for="age">Ålder:</label>
                <input type="number" id="age" name="age" required></input>

                <label for="email">E-post:</label>
                <input type="email" id="email" name="email" required></input>

                <input type="submit" value="Skicka"></input>
            </form>
        </div>
    )
} 

export default Register;
