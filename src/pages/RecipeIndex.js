import React, { Component } from 'react';
import recipes from '../Store';
import RecipeCard from '../components/RecipeCard';


class RecipeIndex extends Component {

  render() {
    // let { recipes } = this.state
    let recipesList = recipes.map((recipe, index) => {
      console.log(recipe.name, index)
      return(
        <RecipeCard recipe={recipe}/>
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
