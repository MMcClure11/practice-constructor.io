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

  const renderTranslations = () => {
    return translations.map(trans => <li key={ trans }><button>{ trans }</button></li>)
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