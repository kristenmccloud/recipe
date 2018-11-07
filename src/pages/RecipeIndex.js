import React, { Component } from 'react';
import recipes from '../Store';
import RecipeCard from '../components/RecipeCard';
import {Link} from 'react-router-dom';


class RecipeIndex extends Component {

  render() {
    // let { recipes } = this.state
    let recipesList = recipes.map((recipe, index) => {
      console.log(recipe.name, index)
      return(
        <Link to={`/recipes/${recipe.id}`}>
          <RecipeCard recipe={recipe}/>
        </Link>
      )
    })
    console.log(recipesList);
    return(
      <div className="Container">
        {recipesList}
      </div>
    )
  }
}

export default RecipeIndex;
