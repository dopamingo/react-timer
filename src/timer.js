import React, { useState, useEffect } from 'react';
import Clock from './clock';
import { Link } from 'react-router-dom';

const Timer = ({location}) => {

	const then = Date.now() + (location.state.mm * 60000) + (location.state.ss * 1000);
	const [seconds, setSeconds] = useState((then - Date.now()) / 1000);
	useEffect(() => {
	const countdown = setInterval(() => {
		setSeconds(Math.round((then - Date.now()) / 1000));
		console.log(Date.now());
		if ((seconds / 1000) < 0) {
			clearInterval(countdown);
		}
	}, 1000);
	return () => clearInterval(countdown);
	}, [seconds, then]);
	return (
		<div class="container">
			<Clock />
			<h1 class="timer">
				00:{Math.floor(seconds / 60)}:{seconds % 60}
			</h1>
			<h2 class="link">
				<Link to = "/">BACK</Link>
			</h2>
		</div>
	);
  }

// const Timer = ({location}) => {

// 	const [minutes, setMinutes] = useState(location.state.mm);
// 	const [seconds, setSeconds] = useState(location.state.ss);
  
// 	useEffect(() => {
// 	  const countdown = setInterval(() => {
// 		if (parseInt(seconds) > 0) {
// 		  setSeconds(parseInt(seconds) - 1);
// 		}
// 		if (parseInt(seconds) === 0) {
// 		  if (parseInt(minutes) === 0) {
// 			clearInterval(countdown);
// 		  } else {
// 			setMinutes(parseInt(minutes) - 1);
// 			setSeconds(59);
// 		  }
// 		}
// 	  }, 1000);
// 	  return () => clearInterval(countdown);
// 	}, [minutes, seconds]);
// 	return (
// 		<div class="container">
// 			<Clock />
// 			<h1 class="timer">
// 				00:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
// 			</h1>
// 			<h2 class="link">
// 				<Link to = "/">BACK</Link>
// 			</h2>
// 		</div>
// 	);
//   }

  export default Timer;