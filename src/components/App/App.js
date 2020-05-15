import React, { Component } from 'react';
import './App.css';
import MovieList from '../MovieList/MovieList'
import { connect } from 'react-redux';

class App extends Component {

  clickRedux = () => {
    console.log('reduxState is:', this.props.reduxState);
  }

  componentDidMount() {
    console.log('component did mounted')
    this.props.dispatch({ type: 'FETCH_MOVIES' })
    this.props.dispatch({ type: 'FETCH_GENRES' })
  }

  // Renders the entire app on the DOM
  render() {
    return (
      <div>
        <header className="App-header"><button onClick={this.clickRedux}>Check Redux State</button></header>
        <div className="App">
          <MovieList />
        </div>
      </div>
    );
  }
}

const myReduxState = (reduxState) => ({ reduxState });
export default connect(myReduxState)(App);
