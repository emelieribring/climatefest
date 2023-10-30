import React from "react";
import '../Styles/Learn.css';
import seed from '../Images/seed.png';
import AccordionDemo from "./FAQ";

function Learn() {
    return(
        <>
        <div className="learn">
          <div className="learnBigBox">
            <div className="headingLearn">
              <h1>Climate Fest</h1>
              <p>Information about ClimateFest  <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nesciunt consequuntur pariatur sunt rem repellendus debitis odio. Suscipit fugiat cupiditate eaque numquam veniam temporibus, adipisci labore officiis, doloribus, ipsum ad.</p>
            </div>
            <div className="imgLearn">
              <img src={seed} alt="seed" style={{ width: '20vw' }} />
            </div>
          </div>
          <div className="learnBoxes">
            <div className="box">
              img and title + link to page
            </div>
            <div className="box">
              img and title + link to page
            </div>
            <div className="box">
              img and title + link to page
            </div>
          </div>
        </div>

        <div className='tasks'>
          <h1>EARN SEEDS</h1>
          <div className='taskBox'>
            <div className='task'>
              <div className='checkBox'></div>
              <p>Sign Up for Planet Fest</p>
            </div>
            <div className='taskSeeds'>
              <p id='seedCount'>100 SEEDS</p>
              <img id='seedImg' src={seed} alt="seed" />
            </div>
          </div>
          <div className='taskBox'>
            <div className='task'>
              <div className='checkBox'></div>
              <p>Complete User Profile</p>
            </div>
            <div className='taskSeeds'>
              <p id='seedCount'>100 SEEDS</p>
              <img id='seedImg' src={seed} alt="seed" />
            </div>
          </div>
          <div className='taskBox'>
            <div className='task'>
              <div className='checkBox'></div>
              <p>Attendee Introduction Post</p>
            </div>
            <div className='taskSeeds'>
              <p id='seedCount'>100 SEEDS</p>
              <img id='seedImg' src={seed} alt="seed" />
            </div>
          </div>
          <div className='taskBox'>
            <div className='task'>
              <div className='checkBox'></div>
              <p>Share on social media</p>
            </div>
            <div className='taskSeeds'>
              <p id='seedCount'>100 SEEDS</p>
              <img id='seedImg' src={seed} alt="seed" />
            </div>
          </div>
          <div className='taskBox'>
            <div className='task'>
              <div className='checkBox'></div>
              <p>Participate in Pre-Event Quizzes</p>
            </div>
            <div className='taskSeeds'>
              <p id='seedCount'>100 SEEDS</p>
              <img id='seedImg' src={seed} alt="seed" />
            </div>
          </div>
          <div className='taskBox'>
            <div className='task'>
              <div className='checkBox'></div>
              <p>Watch Pre-Event Sponsor Messages</p>
            </div>
            <div className='taskSeeds'>
              <p id='seedCount'>100 SEEDS</p>
              <img id='seedImg' src={seed} alt="seed" />
            </div>
          </div>
        </div>

        <div className="FAQ">
            <h1>FAQ</h1>
            <AccordionDemo/>
        </div> 
        </>
    )
} 

export default Learn;
