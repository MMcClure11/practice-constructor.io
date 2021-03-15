import React, { useState } from 'react'

const ObjFromString = () => {

  const [string, setString] = useState('I have a lovely bunch of coconuts didly dum')
  const [letter, setLetter] = useState('l')
  const [count, setCount] = useState(0)

  const countLetters = (str, char) => {
    let charMap = {}
    for(let ltr of str) {
      charMap[ltr] ? charMap[ltr]++ : charMap[ltr] = 1
    }
    let result = charMap[char]
    setCount(result)
  }

  const onClickHandler = () => {
    // setString("I've got a lovely bunch of coconuts, didly dum")
    // setLetter("l")
    countLetters(string, letter)
  }

  const onClickMaxCharsHandler = () => {
    let chars = {}
    let max = 0; 
    let maxCount = '';


    for (let char of string) {
      chars[char] ? chars[char]++ : chars[char] = 1
    }

    for (let char in chars){
      if (chars[char] > max) {
        max = chars[char]
        maxCount = char
      } 
    }
    console.log(max)
    console.log(chars[' '])
    console.log(maxCount)
    return maxCount  //It's not working silly because it's counting spaces!
  }
    
  return (
    <div>
      <h1>Object from String</h1>
      <p>Turn a string into an object that counts the number of times a letter appeared in the string.</p>
      <p>Jordan had to do this for her Skilled Assessment</p>

      <button onClick={ onClickHandler }>Count of inputted letter.</button>
      <button onClick={ onClickMaxCharsHandler }>Most frequently used letter.</button>
      <h2>String: { string }</h2>
      <h2>Letter: { letter }</h2>
      <h2>Count: { count }</h2>
    </div>
  )
}

export default ObjFromString
