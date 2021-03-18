import React, { Component } from 'react'

class PauseCounter extends Component {

  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1 
    }))
  }

  start = () => {
    this.interval = setInterval(() => {
      this.increment()
    }, 1000)
  }

  pause = () => {
    clearInterval(this.interval)
  }

  reset = () => {
    this.setState({count: 0})
  }

  render(){
    return(
      <div>
        I am the pause counter component
        <h2>Count: { this.state.count }</h2>
        <button onClick={ this.start }>Start</button>
        <button onClick={ this.pause }>Pause</button>
        <button onClick={ this.reset }>Reset</button>
      </div>
    )
  }

}

export default PauseCounter