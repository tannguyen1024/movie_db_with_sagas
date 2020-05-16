import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import {BrowserRouter, Route} from "react-router-dom";

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies); // Receives initial call from component with TYPE
    yield takeEvery('SET_GENRE', fetchCurrentGenre); // Receives initial call from component with TYPE
    yield takeEvery('EDIT_CLICK', editMovie); // Receives initial call from component with TYPE
    yield takeEvery('GET_CLICK', getClick);
}

// Additional generator function

function* getClick(action){
    try{
        let movie = action.payload;
        const response = yield axios.get(`/movies/${movie.id}`);
        yield put({type: 'GET_CLICKED', payload: response.data})
    }
    catch{}
}

function* fetchMovies() {
    try {
        const response = yield axios.get('/movies');
        // console.log('response of GET', response.data) /* No longer needed */
        yield put({ type: 'SET_MOVIES', payload: response.data })
    }
    catch (error) {
        console.log('Error in fetchMovies', error)
    }
}

function* fetchCurrentGenre(action) {
    let id = action.payload;
    try {
        const response = yield axios.get(`/genres/${id}`);
        yield put({ type: 'SET_GENRES', payload: response.data });
    }
    catch (error) {
        console.log('Error in fetchCurrentGenre', error)
    }
}

function* editMovie(action) {
    let movie = action.payload;
    console.log('action.payload is:',movie);
    try {
        yield axios.put(`/movies/${movie.id}`, ({data: action.payload}))
        yield put({ type: 'FETCH_MOVIES' });
    }
    catch (error) {
        console.log(error)
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Reducers
const clickedMovie = (state = [], action) => {
    if (action.type === 'CLICK_MOVIE') {
        return action.payload;
    }
    else { return state }
}

const clickedMovie2 = (state =[], action) =>{
    if(action.type === 'GET_CLICKED'){
        return action.payload;
    }
    else{return state}
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        clickedMovie,
        clickedMovie2
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><BrowserRouter><Route path="/" component={App} /></BrowserRouter></Provider>,
    document.getElementById('root'));
registerServiceWorker();
