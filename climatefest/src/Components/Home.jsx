import React, { useEffect, useState } from 'react';
import '../Styles/Home.css'
import leo from '../Images/leo.png';
import { NavLink } from "react-router-dom";
import CountdownTimer from "./Timer";

const words = ['Quizzes', 'Panels', 'Solutions', 'Karaoke', 'Fun', 'Fest'];


function Home() {

    const [currentWord, setCurrentWord] = useState(words[0]);

    useEffect(() => {
      let currentIndex = 0;
  
      const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % words.length;
        setCurrentWord(words[currentIndex]);
      }, 2000); 
  
      return () => clearInterval(interval);
    }, []);


    return(
        <>
        <div className="background">
            <div className="headingLeo">
                <div className="heading">
                    <h1 className='headingTextHome'>Coming 2024 <br />Climate {currentWord}</h1>
                    <container className="mainButtonDiv">
                        <NavLink to="/Register" activeclassname="active"><button>Register here</button></NavLink>
                        <NavLink to="/Learn" activeclassname="active"><button>Learn more</button></NavLink>
                    </container>
                </div>
                <div className="leo">
                    <CountdownTimer/>
                    <img src={leo} alt="leo" />
                </div>
            </div>
            <div className="partners">
                <div class="banner">
                    <p>Veritree  McDonalds  Netflix  Apple  Tesla</p>
                </div>
            </div>
        </div>
        </>
    )
} 

export default Home;
