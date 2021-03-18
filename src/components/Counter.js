import React, { useState } from 'react';

const Counter = () => {

  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(prevCount => prevCount + 1)
  }

  const decrease = () => {
    count - 1 >= 0 
    ? setCount(prevCount => prevCount - 1)
    : alert("Can't decrease below zero. Sorry!")
  }

  return (
    <div>
      <h1>I am a counter that you can manually click.</h1>
      <h2>Count: { count }</h2>
      <button onClick={ increase }>+</button>
      <button onClick={ decrease }>-</button>
    </div>
  )
}

export default Counter