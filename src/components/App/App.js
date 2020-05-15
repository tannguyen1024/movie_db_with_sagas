import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

// Page Components Here
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';

class App extends Component {

  clickRedux = () => {
    console.log('reduxState is:', this.props.reduxState);
  }

  componentDidMount() {
    console.log('Application has mounted.')
    this.props.dispatch({ type: 'FETCH_MOVIES' })
    this.props.dispatch({ type: 'FETCH_GENRES' })
  }

  // Renders the entire app on the DOM
  render() {
    return (
      <div>
        <header className="App-header">
          <button onClick={this.clickRedux}>Check Redux State</button>
        </header>
        <table className="App">
          <HashRouter>
            <Route exact path="/" component={MovieList} />
            <Route path="/details" component={Details} />
          </HashRouter>
        </table>
      </div>
    );
  }
}

const myReduxState = (reduxState) => ({ reduxState });
export default connect(myReduxState)(App);
