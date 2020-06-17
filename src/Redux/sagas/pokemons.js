import { put, call, takeLatest } from 'redux-saga/effects';
import { startGetPokemons } from '../actions/pokemons';
import { apiCall } from '../../api';

export function* getPokemons({ payload }) {
    const results = yield call(apiCall, 'get', 'https://pokeapi.co/api/v2/');
    console.log(results);
}

// Watchers
export default function* pokemons() {
    yield takeLatest(startGetPokemons, getPokemons);
}