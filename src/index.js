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
    yield takeEvery('FETCH_MOVIES', fetchMovies); // SAGAS to run MOVIE GET
    yield takeEvery('SET_GENRE', fetchCurrentGenre); // SAGAS which sets the current genre from clicked item
    yield takeEvery('EDIT_CLICK', editMovie); // RECEIVES the ONCHANGE information //
    yield takeEvery('POST_CLICK', postClick); // SAGAS with Initial Click of Movie
    yield takeEvery('GET_CLICK', getClick); // SAGAS with componentDidMount of Details page
}

// Additional generator function

function* fetchMovies() {
    try {
        const response = yield axios.get('/movies');
        // console.log('response of GET', response.data) /* No longer needed */
        yield put({ type: 'SET_MOVIES', payload: response.data }) /* RUNS REDUCER TO RETURN REDUX STATE */
    }
    catch (error) {
        console.log('Error in fetchMovies', error)
    }
}

function* postClick(action){
    try{
        axios.post(`/click`, ({ data: action.payload })) /* AXIOS POST stores data in click table */
        yield put({type: 'GET_CLICKED'}) /* AXIOS GET to retrieve data of clicked table from DATABASE */
    }
    catch (error){console.log(error)}
} 

function* getClick(action){ /* RUNS once componentDidMount of Details loads */
    try{
        const response = yield axios.get(`/click`);
        yield put({type: 'SET_CLICKED', payload: response.data}) /* Sends response.data as payload to reducer */
    }
    catch{}
}

function* fetchCurrentGenre(action) {
    let id = action.payload;
    try {
        const response = yield axios.get(`/genres/${id}`); /* Performs a special JOIN select that will utilize our junction table to gather the genres of the movie */
        yield put({ type: 'UPDATE_GENRES', payload: response.data }); /* Comes back to reducer genres */
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
            return action.payload; /* SENDS RESULT.ROWS BACK AS ARRAY TO REDUXSTATE.MOVIES */
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_GENRES':
            return action.payload; /* Sends the genre for the current movie back as reduxState.genres */
        default:
            return state;
    }
}

// Reducers
const clickedMovie = (state = [], action) => {
    if (action.type === 'STORE_CLICK') {
        return action.payload;
    }
    else { return state }
}

const clickedMovie2 = (state = [], action) =>{
    if(action.type === 'SET_CLICKED'){
        return action.payload; /* Passes clicked database result.rows back as reduxState.clickedMovie2 */
    }
    else{return state}
}


function* deleteClick(action) {
    if (action.type === "DELETE_CLICK")
       {
        axios.delete(`/click`);
        return
     }
        else{return}
}       

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        deleteClick,
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
