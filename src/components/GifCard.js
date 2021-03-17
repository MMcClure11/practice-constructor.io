import React from 'react'

const GifCard = ({ gif }) => {
  return (
    <div>
      <h4> { gif.title.toUpperCase() }</h4>
      <img src={ gif.images.original.url} alt={ gif.title} />
    </div>
  )
}

export default GifCard
