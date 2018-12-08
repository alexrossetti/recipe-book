import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Recipe from './components/Recipe';
import Search from './components/Search';
import Navbar from './components/Navbar.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      input: ""
    }

    this.getLatest = this.getLatest.bind(this);
    this.getInfo = this.getInfo.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount(){
    this.getLatest();  
  }

  getLatest(){
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

  getInfo = () => {
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s="+this.state.input;
    
    axios.get(url)
        .then(response => {
            const meals = response.data.meals;

            if (meals === null){
              return false;
            }

            if (typeof meals === 'object'){
                this.setState({
                  recipes: meals
                })
            }
        })
        .catch(error => {
            console.log(error);
        });
    
  }

  handleInputChange = (event) => {
    this.setState({
        input: event.target.value
    });

    if ((this.state.input.length >= 3)){
      this.getInfo();
    }

    if (this.state.input.length === 0){
      this.getLatest();
    }

  }


  render() {

    return (

      <div className="App">

        <Navbar getLatest={this.getLatest}/>
        <Search input={this.state.input} handleInputChange={this.handleInputChange} />

        <div className="recipes">
          { Object.keys(this.state.recipes).map((item) => (
              <Recipe key={item} meals={this.state.recipes[item]}/>
            ))
          }
        </div>
        
      </div>

    );

  }

}

export default App;