import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Timer = ({location}) => {
	const [date, setDate] = useState(new Date());
	const [minutes, setMinutes] = useState(parseInt(location.state.mm));
	const [seconds, setSeconds] = useState(parseInt(location.state.ss));

	useEffect(() => {
		const timerID = setInterval(() => {
			setDate(new Date());
		}, 1000);
		return () => clearInterval(timerID);
	}, []);

	useEffect(() => {
		if (seconds > 0) {
			setSeconds(seconds - 1);
		  }
		if (seconds === 0) {
			if (minutes === 0) {
				clearInterval();
			} else {
				setMinutes(minutes - 1);
				setSeconds(59);
			}
		}
		return () => clearInterval();
	}, [date]);

	return (
		<div class="container">
			<h1 class="localtime">{date.toLocaleTimeString('it-IT')}</h1>
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