import React from 'react';
import Input from './input';
import Timer from './timer';
import { Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<Route path = "/" component = {Input} exact />
			<Route path = "/timer" component = {Timer} />
	  	</div>
	);
  }
  
  export default App;