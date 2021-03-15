import React, { useState } from 'react'

const FizzBuzz = () => {

  const [counter, setCounter] = useState(0)

  const onClickHandler = () => {
    setCounter(prevCount => prevCount + 1)
  }

  return (
    <div>
      <h1>FizzBuzz</h1>
      <h3>Click on the counter to see FizzBuzz in action!</h3>
      <h2> Count: { counter }</h2>
      <button onClick={ onClickHandler }>Counter</button>
    </div>
  )
}

export default FizzBuzz
