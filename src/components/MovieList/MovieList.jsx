import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import { connect } from 'react-redux';
import { Grid, Paper } from '@material-ui/core/'

class MovieList extends Component {

    render() {
        return (
            <div className="page">
                <h1>Magical Movie List</h1>
                <Grid container direction="row" justify="space-evenly" alignItems="flex-start">
                    <Grid item xs={12}>
                        <Paper>Testing GRIDS</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper>Testing GRIDS</Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper>Testing GRIDS</Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper>Testing GRIDS</Paper>
                    </Grid>
                </Grid>
                {/* MAP MOVIES HERE */}
                {this.props.reduxState.movies.map(movies =>
                    <tbody key={movies.id}><MovieItem movies={movies} history={this.props.history} /></tbody>
                )}
            </div>
        )
    }

}

/* Choose one of the below */
// export default MovieList;

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(MovieList);