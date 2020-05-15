import React, {Component} from 'react';

class MovieItem extends Component {

    render(){
        // console.log('MovieItem:',this.props.movies) /* No Longer Needed */
        return(
            <>
            <tr>
                    <td><img src={this.props.movies.poster} alt=""/></td>
                    <td>{this.props.movies.title}</td>
                    <td>{this.props.movies.description}</td>
            </tr>
            </>
        )
    }

}

/* Choose one of the below*/
export default MovieItem;

// const putReduxStateOnProps = (reduxState) => ({ reduxState });
// export default connect(putReduxStateOnProps)(MovieItem);