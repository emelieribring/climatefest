import React, { useState, useEffect } from 'react';
import '../Styles/Timer.css';

function CountdownTimer() {
  const targetDate = new Date("2023-12-31T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const currentDate = new Date().getTime();
    const timeLeft = targetDate - currentDate;

    if (timeLeft <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <div className='timerDiv'>
      <p className='timer' style={{color: '#fff'}}> <span>{timeLeft.days} </span>  days</p> 
      <p className='timer' style={{color: '#fff'}}><span>{timeLeft.hours} </span>  hours</p> 
      <p className='timer' style={{color: '#fff'}}><span>{timeLeft.minutes} </span>  minutes</p>
      <p className='timer' style={{color: '#fff'}}><span>{timeLeft.seconds} </span>  seconds</p>  
      <p className='timer' style={{color: '#fff'}}>until plant off</p>
    </div>
  );
}

export default CountdownTimer;
