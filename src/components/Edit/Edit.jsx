import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Input, TextField, Checkbox, FormControlLabel } from '@material-ui/core';
import axios from 'axios';

class Edit extends Component {
    state = { id: this.props.reduxState.clickedMovie.id, title: this.props.reduxState.clickedMovie.title, description: this.props.reduxState.clickedMovie.description}

    cancel = () => {
        this.props.history.push('/details')
    }

    componentDidMount = () => {
        // console.log(this.props.reduxState.genres);
        // for (let i = 0; i < this.props.reduxState.genres.length; i++) {     /* This did not work for setting defaultChecked, ideally I would have had the checkmaraks pre-checked */
        //     const name = this.props.reduxState.genres[i];
            // console.log(name.name)
            // if (name.name === "Adventure") { this.setState({ ...this.state, adventure: "Yes" }) }
            // else if (name.name === "Animated") { this.setState({ ...this.state, animated: "Yes" }) }
            // else if (name.name === "Biographical") { this.setState({ ...this.state, biographical: "Yes" }) }
            // else if (name.name === "Comedy") { this.setState({ ...this.state, comedy: "Yes" }) }
            // else if (name.name === "Disaster") { this.setState({ ...this.state, disaster: "Yes" }) }
            // else if (name.name === "Drama") { this.setState({ ...this.state, drama: "Yes" }) }
            // else if (name.name === "Epic") { this.setState({ ...this.state, epic: "Yes" }) }
            // else if (name.name === "Fantasy") { this.setState({ ...this.state, fantasy: "Yes" }) }
            // else if (name.name === "Musical") { this.setState({ ...this.state, musical: "Yes" }) }
            // else if (name.name === "Romantic") { this.setState({ ...this.state, romantic: "Yes" }) }
            // else if (name.name === "Science Fiction") { this.setState({ ...this.state, science_fiction: "Yes" }) }
            // else if (name.name === "Soap Opera") { this.setState({ ...this.state, soap_opera: "Yes" }) }
            // else if (name.name === "Superhero") { this.setState({ ...this.state, superhero: "Yes" }) }
            // else { console.log(`It's NOT animated!`)}
            // console.log (this.state);
        // }
    }

    handleChange = (event) => {
        this.setState({ title: event.target.value })
    }

    handleChange2 = (event) => {
        this.setState({ description: event.target.value })
    }

    handleSubmit = () => {
        console.log('Submitting State:', this.state)
        axios.delete(`/click`) /* Deletes the entire DETAILS database */
        this.props.dispatch({ type: 'EDIT_CLICK', payload: this.state }) /* Pushes up the current state to SAGAS */
        this.props.dispatch({ type: 'STORE_CLICK', payload: this.state }) 
        this.props.history.push('/details')
    }

    render() {
        return (
            <>
                <Button color="primary" variant="contained" onClick={this.cancel}>Cancel Changes</Button> 
                <Button color="secondary" variant="contained" onClick={this.handleSubmit}>Submit Changes</Button><br/>
                <p><Input onChange={this.handleChange} type="text" variant="contained" color="secondary" fullWidth={false} multiline={true} width="520" placeholder="Movie Name" defaultValue={this.props.reduxState.clickedMovie.title} /></p>
                <TextField onChange={this.handleChange2} type="text" variant="outlined" fullWidth={true} multiline={true} placeholder="Movie Description" defaultValue={this.props.reduxState.clickedMovie.description} /><br />

                <h5>Genre</h5>
                <FormControlLabel control={<Checkbox value="Adventure" color="primary" />} label="Adventure" />
                <FormControlLabel control={<Checkbox  value="Animated" color="primary" />} label="Animated" />
                <FormControlLabel control={<Checkbox  value="Biographical" color="primary" />} label="Biographical" />
                <FormControlLabel control={<Checkbox value="Comedy" color="primary" />} label="Comedy" />
                <FormControlLabel control={<Checkbox  value="Disaster" color="primary" />} label="Disaster" />
                <FormControlLabel control={<Checkbox  value="Drama" color="primary" />} label="Drama" />
                <FormControlLabel control={<Checkbox  value="Epic" color="primary" />} label="Epic" />
                <FormControlLabel control={<Checkbox  value="Fantasy" color="primary" />} label="Fantasy" />
                <FormControlLabel control={<Checkbox  value="Musical" color="primary" />} label="Musical" />
                <FormControlLabel control={<Checkbox  value="Romantic" color="primary" />} label="Romantic" />
                <FormControlLabel control={<Checkbox  value="Science Fiction" color="primary" />} label="Science Fiction" />
                <FormControlLabel control={<Checkbox  value="Soap Opera" color="primary" />} label="Soap Opera" />
                <FormControlLabel control={<Checkbox  value="Superhero" color="primary" />} label="Superhero" />
                <br />
            </>
        )
    }

}

/* Choose one of the below*/
// export default Edit;

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Edit);