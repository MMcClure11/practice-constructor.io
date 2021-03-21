import React from 'react'

const PokemonCard = (props) => {
  return (
    <div>
      <h2>{props.pokemon.name.toUpperCase()}</h2>
      <img 
      src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`}
      alt={`${props.pokemon.name} image`} />
    </div>
  )
}

export default PokemonCard
