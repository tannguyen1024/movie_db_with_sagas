import React, {Component} from 'react';
import {connect} from 'react-redux';
// import axios from 'axios'; /* No longer needed */

// Bootstrap
import { Container, Card } from 'react-bootstrap';

class MovieItem extends Component {

    handleClick = () => {
        // this.props.dispatch({type: 'POST_CLICK', payload:this.props.movies}) /* Posts ALL the information about the movie to DATABASE for POST */
        this.props.dispatch({ type: 'STORE_CLICK', payload: this.props.movies }) /* Posts ALL the information about the movie to reducer for ALTERNATE method of DETAILS */
        this.props.dispatch({ type: 'SET_GENRE', payload: this.props.movies.id }) /* Sets the current genre for the clicked item in reducer */
        this.props.history.push('/details')
    }

    render(){
        // console.log('MovieItem:',this.props.movies) /* No Longer Needed */
        return(
            <Card.Body onClick={this.handleClick}>
                <Card.Img variant="left" src={this.props.movies.poster} />
                    <td>{this.props.movies.title}</td>
                    <td>{this.props.movies.description}</td>
            </Card.Body>
        )
    }

}

/* Choose one of the below*/
// export default MovieItem;

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(MovieItem);