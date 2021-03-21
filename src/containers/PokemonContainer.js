import React, { useState, useEffect } from 'react'

const PokemonContainer = () => {
  const URL = 'https://pokeapi.co/api/v2/pokemon';
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      });
  }, []);

  return (
    <div>
      PokemonContainer
    </div>
  )
}

export default PokemonContainer
