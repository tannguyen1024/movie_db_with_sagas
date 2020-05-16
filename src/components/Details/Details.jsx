import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

handleClick=()=>{
    console.log('handleClick with:', this.props.reduxState.clickedMovie);
    this.props.history.push('/edit')
}

    render() {
        console.log('History is:', this.props.history)
        return (
            <>
            <button onClick={this.handleClick}>Edit Movie</button>
                <tr>
                    <td>Name: {this.props.reduxState.clickedMovie.title}</td>
                </tr><br/>
                <tr>
                    <td>Description: {this.props.reduxState.clickedMovie.description}</td>
                </tr><br />
                <tr>
                    <td>Genre: {this.props.reduxState.clickedMovie.genre}</td>
                </tr>
            </>
        )
    }

}

/* Choose one of the below*/
// export default Details;

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Details);