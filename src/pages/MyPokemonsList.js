import React from 'react';
import { Container } from '../elements/elements';
import { PokemonCards } from '../components/PokemonCards';

export function MyPokemonsList() {
    const myPokemon = JSON.parse(localStorage.getItem('mypokemon'))
    
    return (
        <div>
            <Container>
            {myPokemon && myPokemon.length > 0 ? myPokemon.map((pokemon, i) => <PokemonCards key={i} pokemon={pokemon} />) : 'Kamu belum menangkap pokemon'}
            </Container>
        </div>
    )
}