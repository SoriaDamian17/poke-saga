import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxSaga from 'redux-saga';
import pokeReducer from './reducers/pokemons';
import rootSaga from './sagas';

const rootReducer = combineReducers({
    pokeReducer
});

const sagaMiddleware = reduxSaga();

export default createStore( 
    rootReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);
sagaMiddleware.run(rootSaga);