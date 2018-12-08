import React from 'react';

class Search extends React.Component {

    render(){

        return (            
            <div className="search">            
                <input 
                    type="text"
                    placeholder="Search..."
                    value={this.props.input}
                    onChange = {this.props.handleInputChange}
                />
            </div>        
        )

    }

}

export default Search;