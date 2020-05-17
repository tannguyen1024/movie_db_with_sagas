import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import axios from 'axios';
import { Card, Row, Col, Container } from 'react-bootstrap';

class Details extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_CLICK' }) /* DETAILS page loads componentDidMount and GRABS data from DATABASE from Server.JS */
    }

    handleClick = () => {
        this.props.history.push('/edit') /* Utilizes React Router to transition to edit page */
    }

    home = () => {
        // axios.delete(`/click`); /* Deletes the entire DETAILS database */
        this.props.history.push('/'); /* Utilizes React Router to transition to home page */
    }

    render() {
        // console.log('History is:', this.props.history) /* No longer needed */
        return (<>
            <Container style={{ margin: "50px 25px 25px 25px" }}>
                <Card style={{ boxShadow: "1px 1px 15px  #000000" }} className="text-center">
                    <Card.Header><img src={this.props.reduxState.clickedMovie.poster}/></Card.Header>
                    <Card.Body>
                        <Card.Title>{this.props.reduxState.clickedMovie.title}</Card.Title>
                        <Card.Text>
                            {this.props.reduxState.clickedMovie.description}
                        </Card.Text>
                        <Button color="primary" variant="contained" onClick={this.home}>Back to List</Button> <Button color="secondary" variant="contained" onClick={this.handleClick}>Edit Movie</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">{this.props.reduxState.genres.map(movies => <span>{movies.name} </span>)}</Card.Footer>
                </Card>
            </Container>
        </>
        )
    }
}

/* Choose one of the below*/
// export default Details;

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Details);