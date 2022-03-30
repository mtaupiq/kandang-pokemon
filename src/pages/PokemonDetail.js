import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Pokemon } from '../graphql/pokemon';
import { Container } from '../elements/elements';

export function PokemonDetail() {
    let params = useParams();
    const [gqlVar, setGqlVar] = useState({
        name: ''
    })
    useEffect(() => {
      setGqlVar({name: params.pokemonName})
    }, [params])
    
    return (
        <Container>
            <Pokemon gqlVariables={gqlVar} />
        </Container>
    )
}