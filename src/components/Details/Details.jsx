import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import axios from 'axios';

class Details extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_CLICK' }) /* DETAILS page loads componentDidMount and GRABS data from DATABASE from Server.JS */
    }

    handleClick = () => {
        this.props.history.push('/edit') /* Utilizes React Router to transition to edit page */
    }

    home = () => {
        axios.delete(`/click`); /* Deletes the entire DETAILS database */
        this.props.history.push('/'); /* Utilizes React Router to transition to home page */
    }

    render() {
        // console.log('History is:', this.props.history) /* No longer needed */
        return (
            <div className="page">
                <Button color="primary" variant="contained" onClick={this.home}>Return Home</Button> <Button color="secondary" variant="contained" onClick={this.handleClick}>Edit Movie</Button>
                <tr>
                    <td>NAME: {this.props.reduxState.clickedMovie2.map(info => <span>{info.title} </span>)}</td>
                </tr><br />
                <tr>
                    <td>DESCRIPTION: {this.props.reduxState.clickedMovie2.map(info => <span>{info.description} </span>)}</td>
                </tr><br />
                <tr>
                    <td>GENRE: {this.props.reduxState.genres.map(movies => <span>{movies.name} </span>)}</td>
                </tr>
            </div>
        )
    }
}

/* Choose one of the below*/
// export default Details;

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Details);