import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import { connect } from 'react-redux';

// Bootstrap
// import { Container, Card, CardColumns } from 'react-bootstrap';

class MovieList extends Component {

    render() {
        return (
        <>
            {/* MAP MOVIES HERE */}
            {this.props.reduxState.movies.map(movies =>
                <MovieItem movies={movies} history={this.props.history} />
            )}
        </>
        )
    }
}

/* Choose one of the below */
// export default MovieList;

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(MovieList);