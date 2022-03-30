import React, { useState } from 'react';
import { Container, PaginationContainer, Pagination } from '../elements/elements';
import { ListPokemons } from '../graphql/list-pokemons';

export function PokemonsList() {
    const [gqlVar, setGqlVar] = useState({
        limit: 12,
        offset: 1,
    })
    function nextPage() {
        setGqlVar({
            limit: 12,
            offset: gqlVar.offset + gqlVar.limit,
        })
    }
    function prevPage() {
        setGqlVar({
            limit: 12,
            offset: gqlVar.offset - gqlVar.limit,
        })
    }
    return (
        <div>
            <Container>
                <ListPokemons gqlVariables={gqlVar} />
            </Container>
            <PaginationContainer>
                <Pagination>
                    <button onClick={prevPage} disabled={gqlVar.offset === 1}>&laquo;</button>
                    <button onClick={nextPage}>&raquo;</button>
                </Pagination>
            </PaginationContainer>
        </div>
    )
}