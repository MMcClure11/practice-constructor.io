import React, { useState, useEffect } from 'react'
import PokemonCard from '../components/PokemonCard';

const PokemonContainer = () => {
  const URL = 'https://pokeapi.co/api/v2/pokemon';
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data['results'])
      });
  }, []);

  console.log(pokemons)

  return (
    <div>
      { pokemons.map((pokemon, index) => {
        return <PokemonCard key={index} pokemon={pokemon} id={index + 1} />
      })}
    </div>
  )
}

export default PokemonContainer
