import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Input extends Component {
	state = {
	  	mm: 0,
	  	ss: 0
	}
	mmChange = (e) => {
		this.setState({mm: parseInt(e.target.value)});
	}
	ssChange = (e) => {
		this.setState({ss: parseInt(e.target.value)});
	  }

	render() {
	  return (
		<div class="container">
			<h2 class="title">Enter Your Time!</h2>
			<div>
				<input maxLength="2" placeholder = "mm" onChange = {this.mmChange} />
				<span class="colon">:</span>
				<input maxLength="2" placeholder = "ss" onChange= {this.ssChange} />
			</div>
			<h2 class="link">
				<Link to={{
					pathname: '/timer',
					state: {
						mm: this.state.mm,
						ss: this.state.ss,
						},
					}}>GO
				</Link>
			</h2>
		</div>
	  );
	}
  }

  export default Input;