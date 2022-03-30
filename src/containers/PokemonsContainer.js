import React from 'react';
import { BrowserRouter,  Routes, Route, Link } from "react-router-dom";
import { PokemonsList } from '../pages/PokemonsList';
import { MyPokemonsList } from '../pages/MyPokemonsList';
import { PokemonDetail } from '../pages/PokemonDetail';
import { PageNotFound } from '../pages/404';
import { Menu } from '../elements/elements';

export function PokemonsContainer() {
    
    return (
        <div>
            <BrowserRouter>
            <Menu>
                <ul>
                    <li><Link to="/">Pokemon List</Link></li>
                    <li><Link to="/my-pokemon">My Pokemon List</Link></li>
                </ul>
            </Menu>
                <Routes>
                    <Route path='/' element={<PokemonsList />} />
                    <Route path='/my-pokemon' element={<MyPokemonsList />} />
                    <Route path='/pokemon/:pokemonName' element={<PokemonDetail />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}