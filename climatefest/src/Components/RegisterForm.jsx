import React from "react";
import '../Styles/Register.css'



function Register() {
    return(
        <div className="backgroundDiv">
            <form>
                <h1 className="formHeading">Register here</h1>
                <div className="names">
                    <input type="text" id="firstName" name="firstName" placeholder="Firstname" required></input>
                    <input type="text" id="lastName" name="lastName" placeholder="Lastname" required></input>
                </div>

                <input type="number" id="age" name="age" placeholder="Age" required></input>

                <input type="email" id="email" name="email" placeholder="Email" required></input>

                <input type="submit" value="Skicka"></input>
            </form>
        </div>
    )
} 

export default Register;
