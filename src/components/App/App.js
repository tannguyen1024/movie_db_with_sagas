import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

// Page Components Here
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';
import Header from '../Header/Header';

// Material UI
import 'typeface-roboto';
import { MuiThemeProvider } from '@material-ui/core/';
import { createMuiTheme } from '@material-ui/core/styles';
import { blue, orange } from '@material-ui/core/colors';

const myTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: orange[500]
    }
  }
});

class App extends Component {

  // clickRedux = () => { /* Button to perform check of the current redux State */
  //   console.log('reduxState is:', this.props.reduxState);
  // }

  componentDidMount() {
    console.log('Application has mounted.')
    this.props.dispatch({ type: 'FETCH_MOVIES' })
  }

  // Renders the entire app on the DOM
  render() {
    return (
      <MuiThemeProvider theme={myTheme}>
        <Route path="/" component={Header} />
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={300} classNames="fade">

              <Switch location={location}>
                  
                  <Route exact path="/" component={MovieList} />
                  <Route path="/details" component={Details} />
                  <Route path="/edit" component={Edit} />
              </Switch>

            </CSSTransition>
          </TransitionGroup>
        )} />
      </MuiThemeProvider>
    );
  }
}

{/* It was not transitions that are breaking the POST/GET of DETAILS */ }

const myReduxState = (reduxState) => ({ reduxState });
export default connect(myReduxState)(App);
