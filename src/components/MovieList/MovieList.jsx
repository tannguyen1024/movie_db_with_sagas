import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem'

class MovieList extends Component {

    render() {
        return (
            <>
                <div>MovieList</div>
                /* MAP MOVIES HERE */
                <MovieItem />
            </>
        )
    }

}

/* Choose one of the below*/
export default MovieList;

// const putReduxStateOnProps = (reduxState) => ({ reduxState });
// export default connect(putReduxStateOnProps)(NAME);