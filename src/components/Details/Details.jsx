import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            <>
                <button onClick={this.home}>Return Home</button> <button onClick={this.handleClick}>Edit Movie</button>
                <tr>
                    <td>NAME: {this.props.reduxState.clickedMovie.title}</td>
                </tr><br />
                <tr>
                    <td>DESCRIPTION: {this.props.reduxState.clickedMovie.description}</td>
                </tr><br />
                <tr>
                    <td>GENRE: {this.props.reduxState.genres.map(movies => <span>{movies.name} </span>)}</td>
                </tr>
            </>
        )
    }

}

/* Choose one of the below*/
// export default Details;

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Details);