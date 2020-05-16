import React, {Component} from 'react';
import {connect} from 'react-redux';

class MovieItem extends Component {

    handleClick = () => {
        this.props.dispatch({type: 'CLICK_MOVIE', payload: this.props.movies})
        this.props.dispatch({ type: 'SET_GENRE', payload: this.props.movies.id })
        this.props.history.push('/details')
    }

    render(){
        // console.log('MovieItem:',this.props.movies) /* No Longer Needed */
        return(
            <tr onClick={this.handleClick}>
                    <td><img src={this.props.movies.poster} alt=""/></td>
                    <td>{this.props.movies.title}</td>
                    <td>{this.props.movies.description}</td>
            </tr>
        )
    }

}

/* Choose one of the below*/
// export default MovieItem;

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(MovieItem);