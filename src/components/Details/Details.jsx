import React, { Component } from 'react';
// import {connect} from 'react-redux;'

class Details extends Component {

    render(){
        console.log('History is:',this.props.history)
        return(
            <tbody>Details</tbody>
            
        )
    }

}

/* Choose one of the below*/
export default Details;

// const putReduxStateOnProps = (reduxState) => ({ reduxState });
// export default connect(putReduxStateOnProps)(Details);