import React from 'react'

const PokemonCard = (props) => {
  console.log(props.pokemon)
  return (
    <div>
      <h1>Id: {props.id}</h1>
      <h2>Name: {props.pokemon.name.toUpperCase()}</h2>
    </div>
  )
}

export default PokemonCard
