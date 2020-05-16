import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class Details extends Component {

    handleClick = () => {
        console.log('handleClick with:', this.props.reduxState.clickedMovie);
        this.props.history.push('/edit')
    }

    home = () => {
        this.props.history.push('/')
    }

    render() {
        console.log('History is:', this.props.history)
        return (
            <div className="page">
                <Button color="primary" variant="contained" onClick={this.home}>Return Home</Button> <Button color="secondary" variant="contained" onClick={this.handleClick}>Edit Movie</Button>
                <tr>
                    {JSON.stringify(this.props.reduxState.clickedMovie2)}
                    <td>NAME: {this.props.reduxState.clickedMovie2.title}</td>
                </tr><br />
                <tr>
                    <td>DESCRIPTION: {this.props.reduxState.clickedMovie2.description}</td>
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