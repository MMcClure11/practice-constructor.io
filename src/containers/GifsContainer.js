import React from 'react'
import GifSearch from '../components/GifSearch'
import GifsList from './GifsList'

const GifsContainer = () => {
  return (
    <div>
      <h1>I'm the gifs container</h1>
      <GifSearch />
      <GifsList />
    </div>
  )
}

export default GifsContainer
