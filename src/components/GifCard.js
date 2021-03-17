import React from 'react'

const GifCard = ({ gif }) => {
  console.log(gif)
  return (
    <div>
      <p>I am a gif with id: { gif.id }</p>
    </div>
  )
}

export default GifCard
