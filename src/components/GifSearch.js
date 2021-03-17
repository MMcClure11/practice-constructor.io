import React, { useState } from 'react'

const GifSearch = ({ setGifsHandler }) => {

  const [ query, setQuery ] = useState('')

  const onChangeHandler = (e) => {
    const { value } = e.target
    setQuery(value)
  }

  const searchHandler = (e) => {
    e.preventDefault()
    setGifsHandler(query)
    setQuery('')
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
