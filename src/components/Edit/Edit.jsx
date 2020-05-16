import React, {Component} from 'react';
import {connect} from 'react-redux';

class Edit extends Component {

    render(){
        return(
            <>
                <input placeholder="title" value={this.props.reduxState.clickedMovie.title}/><br/>
                <input placeholder="description" value={this.props.reduxState.clickedMovie.description}/><br/>
            <label>Genre</label><select>
                    <option></option>
                    <option>Adventure</option>
                    <option>Animated</option>
                    <option>Biographical</option>
                    <option>Comedy</option>
                    <option>Disaster</option>
                    <option>Drama</option>
                    <option>Epic</option>
                    <option>Fantasy</option>
                    <option>Musical</option>
                    <option>Romantic</option>
                    <option>Science Fiction</option>
                    <option>Space-Opera</option>
                    <option>Superhero</option>
                </select><br/>
            <button>Submit Changes</button>
            </>
        )
    }

}

/* Choose one of the below*/
// export default Edit;

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Edit);