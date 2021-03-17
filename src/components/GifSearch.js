import React from 'react'

const searchHandler = () => {
  alert('searched!')
}

const GifSearch = () => {
  return (
    <div>
      <form onSubmit={ searchHandler }>
        <input type='text' placeholder='search for a gif' />
        <input type='submit' name='search' value='Search' />
      </form>
    </div>
  )
}

export default GifSearch
