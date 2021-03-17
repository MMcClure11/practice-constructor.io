import React, { useState } from 'react'

const GifSearch = () => {

  const [ query, setQuery ] = useState('')

  const searchHandler = (e) => {
    e.preventDefault()
    alert('searched!')
  }

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setQuery(value)
  }

  return (
    <div>
      <form onSubmit={ searchHandler }>
        <input type='text' placeholder='search for a gif' onChange={ onChangeHandler } name='query' value={ query } />
        <input type='submit' name='search' value='Search' />
      </form>
    </div>
  )
}

export default GifSearch
