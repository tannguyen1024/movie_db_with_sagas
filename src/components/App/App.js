import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// Page Components Here
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import Edit from '../Edit/Edit'

class App extends Component {

  clickRedux = () => {
    console.log('reduxState is:', this.props.reduxState);
  }

  home = () => {
    this.props.history.push('/details')
  }

  componentDidMount() {
    console.log('Application has mounted.')
    this.props.dispatch({ type: 'FETCH_MOVIES' })
    // this.props.dispatch({ type: 'FETCH_GENRES' })
  }

  // Renders the entire app on the DOM
  render() {
    return (
      <div>
        <BrowserRouter>
          <header className="App-header">
            <button onClick={this.clickRedux}>Check Redux State</button><br/>
            <button><Link to="/" homeOwner={this.state}>Home</Link></button>
          </header>
            <Route exact path="/" component={MovieList} />
            <Route path="/details" component={Details} />
            <Route path="/edit" component={Edit} />
        </BrowserRouter>
      </div>
    );
  }
}

const myReduxState = (reduxState) => ({ reduxState });
export default connect(myReduxState)(App);
