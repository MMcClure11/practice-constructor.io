import React, { useState } from 'react'

const FizzBuzz = () => {

  const [counter, setCounter] = useState(0)
  const [fizzBuzz, setFizzBuzz] = useState('')

  const onClickHandler = () => {
    if ( (counter + 1) % 5 === 0 && (counter + 1) % 3 === 0 ) {
      setFizzBuzz('FizzBuzz')
      setCounter(prevCount => prevCount + 1)
    } else if ((counter + 1) % 3 === 0 ) {
      setFizzBuzz('Fizz')
      setCounter(prevCount => prevCount + 1)
    } else if ((counter + 1) % 5 === 0) {
      setFizzBuzz('Buzz')
      setCounter(prevCount => prevCount + 1)
    } else {
    setFizzBuzz('')
    setCounter(prevCount => prevCount + 1)
    }
  }

  console.log(counter, fizzBuzz)

  return (
    <div>
      <h1>FizzBuzz</h1>
      <h3>Click on the counter to see FizzBuzz in action!</h3>
      { fizzBuzz !== '' 
      ? 
      <h2>Count: { fizzBuzz }</h2>
      :
      <h2>Count: { counter }</h2>
      }
      <button onClick={ onClickHandler }>Counter</button>
    </div>
  )
}

export default FizzBuzz
