import React, { useState, useEffect } from 'react';
import Clock from './clock';
import { Link } from 'react-router-dom';

const Timer = ({location}) => {

	const [minutes, setMinutes] = useState(location.state.mm);
	const [seconds, setSeconds] = useState(location.state.ss);
  
	useEffect(() => {
	  const countdown = setInterval(() => {
		if (parseInt(seconds) > 0) {
		  setSeconds(parseInt(seconds) - 1);
		}
		if (parseInt(seconds) === 0) {
		  if (parseInt(minutes) === 0) {
			clearInterval(countdown);
		  } else {
			setMinutes(parseInt(minutes) - 1);
			setSeconds(59);
		  }
		}
	  }, 1000);
	  return () => clearInterval(countdown);
	}, [minutes, seconds]);
	return (
		<div class="container">
			<Clock />
			<h1 class="timer">
				00:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
			</h1>
			<h2 class="link">
				<Link to = "/">BACK</Link>
			</h2>
		</div>
	);
  }

  export default Timer;