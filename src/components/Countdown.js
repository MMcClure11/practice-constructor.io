import React, { Component } from 'react';

export default class Countdown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      minutes: 1,
      seconds: 0
    }
  }

  start = () => {
    this.interval = setInterval(() => {
      const { seconds, minutes } = this.state 

      if(seconds === 0 && minutes !== 0) {
        this.setState(prevState => ({
          minutes: prevState.minutes - 1,
          seconds: 59
        }))
      } else if ( seconds > 0) {
        this.setState(prevState => ({
          seconds: prevState.seconds - 1
        }))
      } else {
        clearInterval(this.interval)
      }
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  render() {
    return(
      <div>
        <h1>I count down from 2 minutes</h1>
        <h3>Minutes: { this.state.minutes } Seconds: { this.state.seconds }</h3>
        <button onClick={ this.start }>Start</button>
      </div>
    )
  }
}