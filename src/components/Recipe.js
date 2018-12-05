import React from 'react';
import Title from './Title';
import Image from './Image';
import './recipe.css';


class Recipe extends React.Component {

    render(){

        return (
            <div className="recipeCard">
                <Image source={this.props.meals.strMealThumb} alt={this.props.meals.strMeal} />
                <Title link={this.props.meals.strSource} title={this.props.meals.strMeal} />               
            </div>
        )
    }


}

export default Recipe;