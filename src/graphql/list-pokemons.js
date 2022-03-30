import { useQuery, gql } from "@apollo/client";
import { PokemonCards } from '../components/PokemonCards';

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;

export const ListPokemons = (prop) => {
    const { loading, error, data } = useQuery(GET_POKEMONS, {
        variables: prop.gqlVariables,
    });

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    console.log('Response from server', data);
    return data.pokemons.results.map((pokemon, i) => <PokemonCards key={i} pokemon={pokemon} />);
};