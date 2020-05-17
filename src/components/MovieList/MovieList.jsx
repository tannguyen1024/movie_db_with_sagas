import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import { connect } from 'react-redux';

class MovieList extends Component {

    render() {
        return (
            <div className="page">
                <h1>Magical Movie List</h1>
                {/* MAP MOVIES HERE */}
                {this.props.reduxState.movies.map(movies =>
                    <tbody key={movies.id}><MovieItem movies={movies} history={this.props.history}/></tbody>
                )}
            </div>
        )
    }

}

/* Choose one of the below */
// export default MovieList;

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(MovieList);