import React from 'react'
import GifCard from '../components/GifCard'

const GifsList = ({ gifs }) => {

  const renderGifs = () => {
    return gifs.map(gif => <GifCard key={ gif.id } {...gif} />)
  }
  return (
    <div>
      <h3>Check out these cool gifs your search returned!</h3>
      { renderGifs() }
    </div>
  )
}

export default GifsList
