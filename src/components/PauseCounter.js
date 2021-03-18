import React, { Component } from 'react'

class PauseCounter extends Component {

  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  render(){
    return(
      <div>
        I am the pause counter component
        <h2>Count: { this.state.count }</h2>
      </div>
    )
  }

}

export default PauseCounter