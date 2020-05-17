import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Input, TextField, FormControlLabel } from '@material-ui/core';
import { Card, Container } from 'react-bootstrap';
import Swal from 'sweetalert2';

class Edit extends Component {
    state = { genre: '', movie_id: this.props.reduxState.clickedMovie.id, id: this.props.reduxState.clickedMovie.id, title: this.props.reduxState.clickedMovie.title, description: this.props.reduxState.clickedMovie.description, poster: this.props.reduxState.clickedMovie.poster }

    cancel = () => {
        this.props.history.push('/details')
    }

    componentDidMount = () => {
        for (let i = 0; i < this.props.reduxState.genres.length; i++) {
            const name = this.props.reduxState.genres[i];
            if (name.name === "Adventure") { this.setState({ ...this.state, adventure: true }) }
            else if (name.name === "Animated") { this.setState({ ...this.state, animated: true }) }
            else if (name.name === "Biographical") { this.setState({ ...this.state, biographical: true }) }
            else if (name.name === "Comedy") { this.setState({ ...this.state, comedy: true }) }
            else if (name.name === "Disaster") { this.setState({ ...this.state, disaster: true }) }
            else if (name.name === "Drama") { this.setState({ ...this.state, drama: true }) }
            else if (name.name === "Epic") { this.setState({ ...this.state, epic: true }) }
            else if (name.name === "Fantasy") { this.setState({ ...this.state, fantasy: true }) }
            else if (name.name === "Musical") { this.setState({ ...this.state, musical: true }) }
            else if (name.name === "Romantic") { this.setState({ ...this.state, romantic: true }) }
            else if (name.name === "Science Fiction") { this.setState({ ...this.state, science_fiction: true }) }
            else if (name.name === "Soap Opera") { this.setState({ ...this.state, soap_opera: true }) }
            else if (name.name === "Superhero") { this.setState({ ...this.state, superhero: true }) }
        }
    }

    handleChange = (event) => {
        this.setState({ title: event.target.value })
    }

    handleChange2 = (event) => {
        this.setState({ description: event.target.value })
    }

    handleChange3 = (event) => { /* Attempting to post to movie_genre junction table */
        console.log('Check is', event.target.checked, event.target.value);
         this.setState({ genre: Number(event.target.value) })
        if (event.target.checked === true) {
            this.props.dispatch({ type: "NEW_GENRE", payload: this.state })
        }
        if (event.target.checked === false) {
            this.props.dispatch({ type:"DELETE_GENRE", payload: this.state })
        }
    }

    handleSubmit = () => {
        Swal.fire({
            title: 'Are you certain',
            text: "of those changes?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.value) {
                // console.log('Submitting State:', this.state)
                // axios.delete(`/click`) /* Deletes the entire DETAILS database */  /* No longer used due to issues with page not loading properly */
                this.props.dispatch({ type: 'EDIT_CLICK', payload: this.state }) /* Pushes up the current state to SAGAS */
                this.props.dispatch({ type: 'STORE_CLICK', payload: this.state }) /* Store our item in reducer for DETAILS later*/
                Swal.fire(
                    'The movie has been updated.',
                    'Returning to movie details.',
                    'success'
                )
                this.props.history.push('/details') /* Utilizes BrowserRouter to navigate to the details page */
            }
        })
    }

    render() {
        console.log('Sent', this.state, 'to server!')
        return (
            <>
                <Container style={{ margin: "50px 25px 25px 25px" }}>
                    <Card style={{ boxShadow: "1px 1px 15px  #000000" }} className="text-center">
                        <Card.Header style={{ opacity: "0.5" }}><img alt="Movie Poster" src={this.props.reduxState.clickedMovie.poster} /></Card.Header>
                        <Card.Body>
                            <Card.Title><Input onChange={this.handleChange} type="text" variant="contained" color="secondary" fullWidth={false} multiline={true} width="520" placeholder="Movie Name" defaultValue={this.props.reduxState.clickedMovie.title} /></Card.Title>
                            <Card.Text>
                                <TextField onChange={this.handleChange2} type="text" variant="outlined" fullWidth={true} multiline={true} placeholder="Movie Description" defaultValue={this.props.reduxState.clickedMovie.description} />
                            </Card.Text>
                            <Button color="primary" variant="contained" onClick={this.cancel}>Cancel Changes</Button> <Button color="secondary" variant="contained" onClick={this.handleSubmit}>Submit Changes</Button><br />
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <FormControlLabel control={<input type="checkbox" onChange={this.handleChange3} defaultChecked={this.state.adventure} value={1} color="primary" />} label="Adventure" />
                            <FormControlLabel control={<input type="checkbox" onChange={this.handleChange3} defaultChecked={this.state.animated} value={2} color="primary" />} label="Animated" />
                            <FormControlLabel control={<input type="checkbox" onChange={this.handleChange3} defaultChecked={this.state.biographical} value={3} color="primary" />} label="Biographical" />
                            <FormControlLabel control={<input type="checkbox" onChange={this.handleChange3} defaultChecked={this.state.comedy} value={4} color="primary" />} label="Comedy" />
                            <FormControlLabel control={<input type="checkbox" onChange={this.handleChange3} defaultChecked={this.state.disaster} value={5} color="primary" />} label="Disaster" />
                            <FormControlLabel control={<input type="checkbox" onChange={this.handleChange3} defaultChecked={this.state.drama} value={6} color="primary" />} label="Drama" />
                            <FormControlLabel control={<input type="checkbox" onChange={this.handleChange3} defaultChecked={this.state.epic} value={7} color="primary" />} label="Epic" /><br />
                            <FormControlLabel control={<input type="checkbox" onChange={this.handleChange3} defaultChecked={this.state.fantasy} value={8} color="primary" />} label="Fantasy" />
                            <FormControlLabel control={<input type="checkbox" onChange={this.handleChange3} defaultChecked={this.state.musical} value={9} color="primary" />} label="Musical" />
                            <FormControlLabel control={<input type="checkbox" onChange={this.handleChange3} defaultChecked={this.state.romantic} value={10} color="primary" />} label="Romantic" />
                            <FormControlLabel control={<input type="checkbox" onChange={this.handleChange3} defaultChecked={this.state.science_fiction} value={11} color="primary" />} label="Science Fiction" />
                            <FormControlLabel control={<input type="checkbox" onChange={this.handleChange3} defaultChecked={this.state.soap_opera} value={12} color="primary" />} label="Soap Opera" />
                            <FormControlLabel control={<input type="checkbox" onChange={this.handleChange3} defaultChecked={this.state.superhero} value={13} color="primary" />} label="Superhero" />
                        </Card.Footer>
                    </Card>
                </Container>
            </>
        )
    }
}

/* Choose one of the below*/
// export default Edit;

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Edit);