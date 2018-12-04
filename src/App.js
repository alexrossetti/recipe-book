import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Recipe from './components/Recipe';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    }
  }

  componentDidMount(){
    const url = "https://www.themealdb.com/api/json/v1/1/latest.php";

    axios.get(url)
      .then(response => {
        
        const meals = response.data.meals;
        
        if (typeof meals === 'object'){
          this.setState({
            recipes: meals
          });
        }

      })
      .catch(error => {
        console.log(error);
      });
      
  }

  render() {

    return (
      <div className="App">
        { Object.keys(this.state.recipes).map((item) => (
            <Recipe key={item} meals={this.state.recipes[item]}/>
          ))
        }
      </div>
    );


  }


}

export default App;
