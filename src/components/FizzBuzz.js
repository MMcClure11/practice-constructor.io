import React, { useState } from 'react'

const FizzBuzz = () => {

  const [counter, setCounter] = useState(0)

  const onClickHandler = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      I am the fizz buzz component
      <h2> Count: { counter }</h2>
      <button onClick={ onClickHandler }>Counter</button>
    </div>
  )
}

export default FizzBuzz
