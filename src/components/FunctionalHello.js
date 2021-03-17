import React, { useState, useEffect } from 'react'

const FunctionalHello = ({ helloTranslations }) => {
  const [translations, setTranslations] = useState([])

  useEffect(() => {
    fetch(helloTranslations)
    .then(res => res.json())
    .then(data => {
      let arr = data.translations.filter(trans => trans !== 'Hello')
      setTranslations(arr)
    })
  }, [])

  return (
    <>
      <h1>Hello Functional Component</h1>
    </>
  )
}

export default FunctionalHello