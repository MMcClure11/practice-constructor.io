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

  const onClickResetHandler = () => {
    setFizzBuzz('')
    setCounter(0)
  }

  return (
    <div>
      <h1>FizzBuzz</h1>
      <h3>Click on the counter to see FizzBuzz in action!</h3>
      <p>The FizzBuzz problem is a classic test given in coding interviews. 
        The task is simple: Print integers 1 to N, 
        but print “Fizz” if an integer is divisible by 3, 
        “Buzz” if an integer is divisible by 5, and 
        “FizzBuzz” if an integer is divisible by both 3 and 5.</p>
      <h2>Counter</h2>
      { fizzBuzz !== '' 
      ? 
      <h2>{ fizzBuzz }</h2>
      :
      <h2>{ counter }</h2>
      }
      <button onClick={ onClickHandler }>Counter</button>
      <button onClick={ onClickResetHandler }>Reset</button>
    </div>
  )
}

export default FizzBuzz
