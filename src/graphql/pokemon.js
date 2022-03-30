import { useQuery, gql } from "@apollo/client";
import { Pokemon as PokemonDetail } from "../components/Pokemon";

const GET_POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      abilities {
        ability {
          name
        }
      }
      sprites {
        front_default
      }
      base_experience
      id
      moves {
      	move {
          name
        }
      }
      name
      order
      stats {
        stat {
          name
        }
        base_stat
        effort
      }
      types {
        type {
          name
        }
      }
      weight
      status
      message
    }
  }
`;

export const Pokemon = (prop) => {
    const { loading, error, data } = useQuery(GET_POKEMON, {
        variables: prop.gqlVariables,
    });

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    console.log('Response from server', data);
    return <PokemonDetail data={data} />
};