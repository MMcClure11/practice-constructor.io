import React, { useState } from 'react'
import GifSearch from '../components/GifSearch'
import GifsList from './GifsList'

const GifsContainer = () => {

  const [gifs, setGifs] = useState([])
  const [query, setQuery] = useState('')
  
  const setGifsHandler = (query) => {
    setQuery(query)
    return fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=COI788NHznUTLid1ciKLW2cPSQ4voDn1`)
      .then(res => res.json())
      .then(data => setGifs(data.data))
  }

  return (
    <div>
      <GifSearch setGifsHandler={ setGifsHandler } />
      <GifsList gifs={ gifs } query={ query } />
    </div>
  )
}

export default GifsContainer
