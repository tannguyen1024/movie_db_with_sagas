import React, {Component} from 'react';
// import {connect} from 'react-redux';
import { Button } from '@material-ui/core';

class Header extends Component {

    home = () => {
        this.props.history.push('/')
    }

    render(){
        return(
            <header className="App-header">
                <Button onClick={this.home} size="large" color="primary">⚐ HOME</Button>
            </header>
        )
    }

}

/* Choose one of the below*/
export default Header;

// const putReduxStateOnProps = (reduxState) => ({ reduxState });
// export default connect(putReduxStateOnProps)(Header);