import React from 'react';
import './image.css';

class Image extends React.Component {

    render(){

        return (
            <div>
                <img src={this.props.source} alt={this.props.alt}/>
            </div>
        )
    }


}

export default Image;