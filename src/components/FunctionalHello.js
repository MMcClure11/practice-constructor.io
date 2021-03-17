import React, { useState, useEffect } from 'react'

const FunctionalHello = ({ helloTranslations }) => {
  const [translations, setTranslations] = useState([])

  useEffect(() => {
    // fetch(helloTranslations)
    // .then(res => res.json())
    // .then(data => {
    //   let arr = data.translations.filter(trans => trans !== 'Hello')
    //   setTranslations(arr)
    // })
    setTranslations(helloTranslations.filter(trans => trans !== 'Hello'))
  }, [])

  const logTranslation = (translation) => {
    console.log(translation)
  }

  const renderTranslations = () => {
    return translations.map(trans => <li key={ trans }><button onClick={ () => logTranslation(trans) }>{ trans }</button></li>)
  }

  return (
    <>
      <h1>Hello Functional Component</h1>
      <ul>
        { renderTranslations() }
      </ul>
    </>
  )
}

export default FunctionalHello