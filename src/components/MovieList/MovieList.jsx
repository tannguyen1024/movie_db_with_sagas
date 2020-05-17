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
                <div key={movies.id}><MovieItem movies={movies} history={this.props.history} /></div>
            )}
        </>
        )
    }
}

/* Choose one of the below */
// export default MovieList;

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(MovieList);