import React from 'react';
import './navbar.css';

class Navbar extends React.Component {

    render(){

        return (
            <div className="navbar">
                <ul>
                    <li><button onClick={this.props.getLatest}>Latest</button></li>
                </ul>
            </div>
        )
    }

}

export default Navbar;