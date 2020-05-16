import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, Checkbox, FormControlLabel } from '@material-ui/core';

class Edit extends Component {
    state = {}

    componentDidMount = () => {
        console.log(this.props.reduxState.genres);
        for (let i = 0; i < this.props.reduxState.genres.length; i++) {
            const name = this.props.reduxState.genres[i];
            // console.log(name.name)
            if (name.name === "Adventure") { this.setState({ ...this.state, adventure: "Yes" }) }
            else if (name.name === "Animated") { this.setState({ ...this.state, animated: "Yes" }) }
            else if (name.name === "Biographical") { this.setState({ ...this.state, biographical: "Yes" }) }
            else if (name.name === "Comedy") { this.setState({ ...this.state, comedy: "Yes" }) }
            else if (name.name === "Disaster") { this.setState({ ...this.state, disaster: "Yes" }) }
            else if (name.name === "Drama") { this.setState({ ...this.state, drama: "Yes" }) }
            else if (name.name === "Epic") { this.setState({ ...this.state, epic: "Yes" }) }
            else if (name.name === "Fantasy") { this.setState({ ...this.state, fantasy: "Yes" }) }
            else if (name.name === "Musical") { this.setState({ ...this.state, musical: "Yes" }) }
            else if (name.name === "Romantic") { this.setState({ ...this.state, romantic: "Yes" }) }
            else if (name.name === "Science Fiction") { this.setState({ ...this.state, science_fiction: "Yes" }) }
            else if (name.name === "Soap Opera") { this.setState({ ...this.state, soap_opera: "Yes" }) }
            else if (name.name === "Superhero") { this.setState({ ...this.state, superhero: "Yes" }) }
            else { console.log(`It's NOT animated!`)}
            console.log (this.state);
        }
    }

    handleChange = (event) => {
        this.setState({ title: event.target.value })
        console.log(this.state)
    }

    handleChange2 = (event) => {
        this.setState({ description: event.target.value })
        console.log(this.state)
    }

    handleChange3 = (event) => { /* This is not working at this time.  Will return to it if t*/
        // this.setState({ ...this.state, genre: event.target.value })
        console.log(this.state.genre)
    }

    handleSubmit = () => {
        console.log('Submitting State:', this.state.animated)
        // this.props.dispatch({ type: 'EDIT_CLICK', payloaad: this.state })
    }

    render() {
        return (
            <>
                <TextField onChange={this.handleChange} type="text" variant="outlined" fullWidth={false} multiline={true} width="520" placeholder="Movie Name" defaultValue={this.props.reduxState.clickedMovie.title} /><br />
                <TextField onChange={this.handleChange2} type="text" variant="outlined" fullWidth={true} multiline={true} placeholder="Movie Description" defaultValue={this.props.reduxState.clickedMovie.description} /><br />

                <h5>Genre</h5>
                <FormControlLabel control={<Checkbox defaultChecked={this.state.adventure==='Yes'} onChange={this.handleChange3} value="Adventure" color="primary" />} label="Adventure" />
                <FormControlLabel control={<Checkbox defaultChecked={this.state.animated==="Yes"} onChange={this.handleChange3} value="Animated" color="primary" />} label="Animated" />
                <FormControlLabel control={<Checkbox defaultChecked={this.state.biographical === "Yes"} onChange={this.handleChange3} value="Biographical" color="primary" />} label="Biographical" />
                <FormControlLabel control={<Checkbox defaultChecked={this.state.comedy === "Yes"} onChange={this.handleChange3} value="Comedy" color="primary" />} label="Comedy" />
                <FormControlLabel control={<Checkbox onChange={this.handleChange3} value="Disaster" color="primary" />} label="Disaster" />
                <FormControlLabel control={<Checkbox onChange={this.handleChange3} value="Drama" color="primary" />} label="Drama" />
                <FormControlLabel control={<Checkbox onChange={this.handleChange3} value="Epic" color="primary" />} label="Epic" />
                <FormControlLabel control={<Checkbox onChange={this.handleChange3} value="Fantasy" color="primary" />} label="Fantasy" />
                <FormControlLabel control={<Checkbox onChange={this.handleChange3} value="Musical" color="primary" />} label="Musical" />
                <FormControlLabel control={<Checkbox onChange={this.handleChange3} value="Romantic" color="primary" />} label="Romantic" />
                <FormControlLabel control={<Checkbox onChange={this.handleChange3} value="Science Fiction" color="primary" />} label="Science Fiction" />
                <FormControlLabel control={<Checkbox onChange={this.handleChange3} value="Soap Opera" color="primary" />} label="Soap Opera" />
                <FormControlLabel control={<Checkbox onChange={this.handleChange3} value="Superhero" color="primary" />} label="Superhero" />
                <br />
                <button onClick={this.handleSubmit}>Submit Changes</button>
            </>
        )
    }

}

/* Choose one of the below*/
// export default Edit;

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Edit);