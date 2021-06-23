import React from 'react';

class Clock extends React.Component {
  state = {date: new Date()};
  componentDidMount() { // 마운트 될 때 수행되는 것
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() { // 언마운트 될 때 수행되는 것
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({date: new Date()});
  }
  render() {
    return (
      <div>
        <h1 class="localtime">{this.state.date.toLocaleTimeString('it-IT')}</h1>
      </div>
    );
  }
}

export default Clock;


