import React from 'react'
import GifCard from '../components/GifCard'

const GifsList = ({ gifs, query }) => {

  const renderGifs = () => {
    return gifs.map(gif => <GifCard key={ gif.id } gif={ gif } />)
  }

  return (
    <div>
      { query 
        ? <h3>I found you some { query }!</h3>
        : <h3>Search for some gifs!</h3>
      }
      { renderGifs() }
    </div>
  )
}

export default GifsList
