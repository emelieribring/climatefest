import React from "react";
import '../Styles/navbar.css';
import logo from '../Images/logo.png';
import smallLogo from '../Images/CFIcon.png';
import hamLogo from '../Images/hamIcon.png';
import { NavLink } from 'react-router-dom';


function NavBar() {
    return(
        <nav>
            <div className="computer-links">
                <ul>
                <NavLink to="/" activeclassname="active"><li>Home</li></NavLink>
                <NavLink to="/Learn" activeclassname="active"><li>About</li></NavLink>
                </ul>
            </div>
            <div className="computer-logo">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="mobile-img">
                <img src={smallLogo} alt="smallLogo" />
                <img src={hamLogo} alt="hamburgerIcon" />
            </div>
            <div className="buttonDiv">
                <button>Sign In</button>
                <button>Sign Up</button>
            </div>
        </nav>
    )
} 

export default NavBar;
