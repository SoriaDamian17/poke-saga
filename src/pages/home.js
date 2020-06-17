import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { startGetPokemons } from '../Redux/actions/pokemons';
import Layout from '../components/Layout';

import '../styles/home.scss';

export default () => {

    const dispatch = useDispatch();
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        if (pokemons.lenght === 0) {
            dispatch(startGetPokemons());
            setPokemons([{}]);
        }
    },[]);

    return (
        <Layout title="Home">
            <div className="ui container">
                <h1>Hello Poke-Saga</h1>
            </div>
        </Layout>
    );
};