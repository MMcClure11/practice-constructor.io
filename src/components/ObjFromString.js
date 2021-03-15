import React, { useState } from 'react'

const ObjFromString = () => {

  const [string, setString] = useState('I have a lovely bunch of coconuts didly dum')
  const [letter, setLetter] = useState('l')
  const [count, setCount] = useState(0)

  const countLetters = (str, char) => {
    let charMap = {}
    console.log(str)
    for(let ltr of str) {
      charMap[ltr] ? charMap[ltr]++ : charMap[ltr] = 1
    }
    console.log(charMap)
    setCount(99)
  }

  const onClickHandler = () => {
    // setString("I've got a lovely bunch of coconuts, didly dum")
    // setLetter("l")
    countLetters(string, letter)
  }
    
  return (
    <div>
      <h1>Object from String</h1>
      <p>Turn a string into an object that counts the number of times a letter appeared in the string.</p>
      <p>Jordan had to do this for her Skilled Assessment</p>

      <button onClick={ onClickHandler }>Click me to get the count!</button>
      <h2>String: { string }</h2>
      <h2>Letter: { letter }</h2>
      <h2>Count: { count }</h2>
    </div>
  )
}

export default ObjFromString
