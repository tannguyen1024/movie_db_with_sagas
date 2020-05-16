import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class Details extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_CLICK' })
    }

    handleClick = () => {
        console.log('handleClick with:', this.props.reduxState.clickedMovie);
        this.props.history.push('/edit')
    }

    home = () => {
        this.props.history.push('/')
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