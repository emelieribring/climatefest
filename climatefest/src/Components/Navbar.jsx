import React from "react";
import '../Styles/navbar.css';
import logo from '../Images/logo.png';
import { NavLink } from 'react-router-dom';


function NavBar() {
    return(
        <nav>
            <div>
                <ul>
                <NavLink to="/" activeclassname="active"><li>Home</li></NavLink>
                <NavLink to="/Learn" activeclassname="active"><li>About</li></NavLink>
                </ul>
            </div>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div className="buttonDiv">
                <button>Sign In</button>
                <button>Sign Up</button>
            </div>
        </nav>
    )
} 

export default NavBar;
