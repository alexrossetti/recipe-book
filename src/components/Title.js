import React from 'react';
import './title.css';

class Title extends React.Component {

    render(){

        return (
                <h2><a target="_blank" rel="noopener noreferrer" href={this.props.link}>{this.props.title}</a></h2>
        )
    }


}


export default Title;