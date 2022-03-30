import React from 'react';
import { PokemonCard, PokemonName, PokemonImage, PokemonInfo, Button } from '../elements/elements';

export function Pokemon({ data }) {
    let myPokemonList = localStorage.getItem('mypokemon') ? JSON.parse(localStorage.getItem('mypokemon')) : []
    function catchPokemon(pokemon) {
        let rand = Math.random()
        if (rand < 0.5) {
            let myPokemonName = prompt('Pokemon berhasil di tangkap, silahkan beri nama pokemon anda!', pokemon.name)
            myPokemonList.forEach(pokemon => {
                if(pokemon.nickname === myPokemonName) return myPokemonName = prompt(`Nama ${myPokemonName} sudah ada, silahkan beri nama yang lain!`)
            })
            const myPokemon = {
                "nickname": myPokemonName ? myPokemonName:pokemon.name,
                "name": pokemon.name,
                "image": pokemon.sprites.front_default
            }
            myPokemonList.push(myPokemon)
            localStorage.setItem('mypokemon', JSON.stringify(myPokemonList))
            console.log(myPokemon)
        } else {
            alert('Pokemon gagal di tangkap, silahkan coba lagi!')
        }
    }
    return (
        <PokemonCard>
            <PokemonName>
                <p>{data.pokemon.name}</p>
            </PokemonName>
            <PokemonImage>
                <img src={data.pokemon.sprites.front_default} alt={data.pokemon.name} />
            </PokemonImage>
            <PokemonInfo>
                <div><strong>Name</strong></div>
                <div>{data.pokemon.name[0].toUpperCase() + data.pokemon.name.substring(1)}</div><br/>
                <div><strong>Abilities</strong></div>
                <div>{data.pokemon.abilities.map((abilities, i) => <span key={i}>{abilities.ability.name[0].toUpperCase() + abilities.ability.name.substring(1)}{i < data.pokemon.abilities.length - 1 ? ", ":""}</span>)}</div><br/>
                <div><strong>Types</strong></div>
                <div>{data.pokemon.types.map((types, i) => <span key={i}>{types.type.name[0].toUpperCase() + types.type.name.substring(1)}{i < data.pokemon.types.length - 1 ? ", ":""}</span>)}</div><br/>
                <div><strong>Moves</strong></div>
                <div>{data.pokemon.moves.map((moves, i) => <span key={i}>{moves.move.name[0].toUpperCase() + moves.move.name.substring(1)}{i < data.pokemon.moves.length - 1 ? ", ":""}</span>)}</div><br/>
                <div><strong>Stats</strong></div>
                <div>xp: {data.pokemon.base_experience}, {data.pokemon.stats.map((stats, i) => <span key={i}>{stats.stat.name}: {stats.base_stat}{i < data.pokemon.stats.length - 1 ? ", ":""}</span>)}</div><br/>
            </PokemonInfo>
            <Button onClick={() => catchPokemon(data.pokemon)}>Catch</Button>
        </PokemonCard>
    )
}