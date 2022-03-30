import styled from '@emotion/styled';

export const Container = styled.div`
    width: 90%;
    display: grid;
    margin: 20px auto;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;
`

export const Menu = styled.div`
    text-align: center;
    ul {
        width: 90%;
        list-style-type: none;
        margin: 20px auto;
        padding: 16px;
        overflow: hidden;
        background-color: teal;
        border-radius: 5px;
    }
    
    li {
        display: inline;
    }
    
    li a {
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }
    
    li a:hover {
        background-color: #111;
    }
    @media (max-width: 425px) {
        ul {
            padding: 0px;
        }
        li a {
            display: block;
        }
    }
`

export const PaginationContainer = styled.div`
    text-align: center;
`

export const Pagination = styled.div`
    display: inline-block;
    margin-bottom: 20px;
    button {
        color: black;
        padding: 8px 16px;
        text-decoration: none;
        transition: background-color .3s;
        border: 1px solid rgba(0, 0, 0, 0.125);
        border-radius: 0.25rem;
        box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
        background-color: white;
        margin: 5px;
        cursor: pointer;
      }
`
export const PokemonCard = styled.div`
    background-color: white;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    overflow: hidden;
    margin-bottom: 20px;
    text-align: center;
`

export const PokemonName = styled.div`
    background-color: teal;
    text-align: center;
    padding: 5px;
    & > p {
        text-transform: uppercase;
        font-weight: bold;
        color: white;
        letter-spacing: 4px;
        text-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.4);
    }
`

export const PokemonImage = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    & > img {
        max-width: 100%;
        height: auto;
    }
`

export const PokemonInfo = styled.div`
    padding: 20px;
    display: bloxk;
    text-align: center;
`

export const Button = styled.button`
    margin: 20px;
    padding: 8px 24px;
    background-color: teal;
    color: white;
    border: 0px;
    border-radius: 3px;
    appearance: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    &:hover,
    &:active,
    &:focus {
        background-color: #111;
    }
`