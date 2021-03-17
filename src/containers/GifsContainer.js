import React from 'react'
import GifSearch from '../components/GifSearch'
import GifsList from './GifsList'

const GifsContainer = () => {
  
  const setGifsHandler = (query) => {
    return fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=COI788NHznUTLid1ciKLW2cPSQ4voDn1`)
      .then(res => res.json())
      .then(data => console.log(data))
  }
  return (
    <div>
      <h1>I'm the gifs container</h1>
      <GifSearch setGifsHandler={ setGifsHandler } />
      <GifsList />
    </div>
  )
}

export default GifsContainer
