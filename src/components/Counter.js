import React, { useState, useEffect } from 'react';
import PauseCounter from './PauseCounter';

const Counter = () => {

  const [count, setCount] = useState(0)
  const [counter, setCounter] = useState(0)

  const increase = () => {
    setCount(prevCount => prevCount + 1)
  }

  const decrease = () => {
    count - 1 >= 0 
    ? setCount(prevCount => prevCount - 1)
    : alert("Can't decrease below zero. Sorry!")
  }

  const reset = () => {
    setCount(0)
  }

  const increaseCounter = () => {
    setCounter(prevCount => prevCount + 1)
  }

  useEffect(() => {
    const timer = setInterval( () => {
      increaseCounter()
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  const resetCounter = () => {
    setCounter(0)
  }

  const decreaseCounter = () => {
    setCounter(prevCount => prevCount - 1)
  }

  // const [pausableCounter, setPausableCounter] = useState(0)

  // const increasePausableCounter = () => {
  //   setPausableCounter(prevCount => prevCount + 1)
  // }

//  const start = () => {
//    const interval = setInterval(() => {
//      increasePausableCounter()
//    }, 1000)
//  }

// const pause = () => {
//   clearInterval(interval)
// }  

// const resetPausableCounter = () => {
//   setPausableCounter(0)
// } 

  return (
    <div>
      <h1>I am a counter that you can manually click.</h1>
      <h2>Count: { count }</h2>
      <button onClick={ increase }>+</button>
      <button onClick={ decrease }>-</button>
      <button onClick={ reset }>0</button>
      <h1>I am a counter set on a one second interval.</h1>
      <p>I am built with useEffect.</p>
      <h2>Count: { counter }</h2>
      <button onClick={ increaseCounter }>+</button>
      <button onClick={ decreaseCounter }>-</button>
      <button onClick={ resetCounter }>0</button>
      <h1>I am a counter you can start and stop.</h1>
      {/* <h2>Count: { pausableCounter }</h2> */}
      <PauseCounter />
      {/* <button onClick={ start }>Start</button> */}
      {/* <button onClick={ pause }>Pause</button> */}
      {/* <button onClick={ resetPausableCounter }>0</button> */}
    </div>
  )
}

export default Counter