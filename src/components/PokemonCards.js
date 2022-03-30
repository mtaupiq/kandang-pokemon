import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { PokemonCard, PokemonName, PokemonImage, Button } from '../elements/elements';

export function PokemonCards({ pokemon }) {

    function release(nickname, e) {
        e.preventDefault()
        const remove = window.confirm(`Kamu yakin akan melepas ${nickname}?`)
        const myPokemon = JSON.parse(localStorage.getItem('mypokemon'))
        if (remove) {
            for(let i=0; i < myPokemon.length; i++) {
                if (myPokemon[i].nickname === nickname) {
                    myPokemon.splice(i,1)
                }
            }
            localStorage.setItem('mypokemon', JSON.stringify(myPokemon))
            window.location.reload()
        }
    }
    
    return (
        <Link to={`/pokemon/${pokemon.name}`} key={pokemon.name}>
            <PokemonCard>
                <PokemonName>
                    <p>{pokemon.nickname ? pokemon.nickname:pokemon.name}</p>
                </PokemonName>
                <PokemonImage>
                    <img src={pokemon.image} alt={pokemon.name} />
                </PokemonImage>
                {pokemon.nickname ? <Button onClick={(e) => release(pokemon.nickname, e)}>Release</Button>:null}
            </PokemonCard>
            <Outlet />
        </Link>
    )
}