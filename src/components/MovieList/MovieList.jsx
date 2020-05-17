import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import { connect } from 'react-redux';

// Bootstrap
import { Container, Card } from 'react-bootstrap';

class MovieList extends Component {

    render() {
        return (
                <div className="page">
                    <h1>Magical Movie List</h1>
                    {/* MAP MOVIES HERE */}
                    {this.props.reduxState.movies.map(movies =>
                        <Card key={movies.id} style={{ width: '80%' }}><MovieItem movies={movies} history={this.props.history} /></Card>
                    )}
                </div>
        )
    }
}

/* Choose one of the below */
// export default MovieList;

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(MovieList);