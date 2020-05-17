import React, {Component} from 'react';
// import {connect} from 'react-redux';
import { Button } from '@material-ui/core';

class Header extends Component {

    home = () => {
        this.props.history.push('/')
    }

    render(){
        return(
            <header className="App-header" style={{ boxShadow: "2px 2px 20px  #000000" }}>
                <Button onClick={this.home} size="large" color="primary" variant="contained">⚐ HOME</Button>
                <Button color="primary" size="large" style={{position: "absolute", left:"40%"}}>Magnificent Movie Database</Button>
            </header>
        )
    }

}

/* Choose one of the below*/
export default Header;

// const putReduxStateOnProps = (reduxState) => ({ reduxState });
// export default connect(putReduxStateOnProps)(Header);