import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import { connect } from 'react-redux';

class MovieList extends Component {

    handleClick = () => {
        this.props.history.push('/details')
    }

    render() {
        return (
            <>
                <tbody><tr><td>MovieList</td></tr></tbody>
                {/* MAP MOVIES HERE */}
                {this.props.reduxState.movies.map(movies =>
                    <tbody key={movies.id} onClick={this.handleClick}><MovieItem movies={movies} /></tbody>
                )}
            </>
        )
    }

}

/* Choose one of the below */
// export default MovieList;

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(MovieList);