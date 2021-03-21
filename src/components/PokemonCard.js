import React from 'react'

const PokemonCard = ({ pokemon, id}) => {
  return (
    <>
      <h2>{pokemon.name.toUpperCase()}</h2>
      <img 
      src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
      alt={`${pokemon.name} image`} />
    </>
  )
}

export default PokemonCard
