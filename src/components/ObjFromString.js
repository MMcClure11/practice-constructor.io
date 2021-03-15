import React, { useState } from 'react'

const ObjFromString = () => {

  const [string, setString] = useState('')
  const [letter, setLetter] = useState('')
  const [count, setCount] = useState(0)
  const [maxCount, setMaxCount] = useState('')

  const countLetters = (str, char) => {
    let charMap = {}
    for(let ltr of str) {
      charMap[ltr] ? charMap[ltr]++ : charMap[ltr] = 1
    }
    let result = charMap[char]
    result ? setCount(result) : setCount(0)
  }

  const onClickHandler = () => {
    countLetters(string, letter)
  }

  const onClickMaxCharsHandler = () => {
    let stringNoSpaces = string.replace(/\s/g, '').toLowerCase();
    let chars = {}
    let max = 0; 
    let maxCount = '';

    for (let char of stringNoSpaces) {
      chars[char] ? chars[char]++ : chars[char] = 1
    }

    for (let char in chars){
      if (chars[char] > max) {
        max = chars[char]
        maxCount = char
      } 
    }
    setMaxCount(maxCount)
  }

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    name === 'string' ? setString(value) : setLetter(value)
  }
    
  return (
    <div>
      <h1>Object from String</h1>
      <p>Turn a string into an object that counts the number of times a letter appeared in the string.</p>
      <p>Jordan had to do this for her Skilled Assessment</p>

      <form>
        <input type='text' placeholder='your string' name='string' onChange={ onChangeHandler } value={ string } />
        <input type='text' placeholder='your letter' maxLength='1' name='letter' onChange={ onChangeHandler } value={ letter } />
      </form>

      <button onClick={ onClickHandler }>Count of inputted letter.</button>
      <button onClick={ onClickMaxCharsHandler }>Most frequently used letter.</button>
      <h2>String: { string }</h2>
      <h2>Letter: { letter }</h2>
      <h2>Your Selected Letter Appears { count } time{ count !== 1 && 's' }</h2>
      { maxCount && <h2>Most Used Letter: { maxCount }</h2> }
    </div>
  )
}

export default ObjFromString
