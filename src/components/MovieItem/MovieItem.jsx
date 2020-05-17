import React, { Component } from 'react';
import { connect } from 'react-redux';

// import axios from 'axios'; /* No longer needed */

// Bootstrap
import { Card, Row, Col, Container, Button } from 'react-bootstrap';

class MovieItem extends Component {

    handleClick = () => {
        // this.props.dispatch({type: 'POST_CLICK', payload:this.props.movies}) /* Posts ALL the information about the movie to DATABASE for POST */
        this.props.dispatch({ type: 'STORE_CLICK', payload: this.props.movies }) /* Posts ALL the information about the movie to reducer for ALTERNATE method of DETAILS */
        this.props.dispatch({ type: 'SET_GENRE', payload: this.props.movies.id }) /* Sets the current genre for the clicked item in reducer */
        this.props.history.push('/details') /* Utilizes BrowserRouter to navigate to the details page */
    }

    render() {
        // console.log('MovieItem:',this.props.movies) /* No Longer Needed */
        return (
            <>
                <Container style={{margin: "50px 25px 25px 25px"}}>
                    <Row>
                        <Col md="auto" >
                            <Card.Img src={this.props.movies.poster} style={{ boxShadow: "2px 2px 20px  #000000" }} />
                        </Col>
                        <Col>
                            <Card style={{ boxShadow: "2px 2px 20px  #000000" }}>
                                <Card.Header>{this.props.movies.title}<span style={{ float: "right" }}><Button variant="outline-dark" size="sm" onClick={this.handleClick}>Details</Button></span></Card.Header>
                                <Card>{this.props.movies.description}</Card>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

/* Choose one of the below*/
// export default MovieItem;

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(MovieItem);