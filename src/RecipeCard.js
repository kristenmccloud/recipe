import React, { Component } from 'react';
import Recipes from './Recipes';

// const RecipeCard = (props) => {
//   return (
//   <div className="RecipeCard">
//     <div>
//     <h2>{this.props.name}</h2>
//
//     </div>
//   </div>
// )
// };

class RecipeCard extends Component {
  render() {
  return (
    <div className="RecipeCard">
      <div>
      <h2>{this.props.recipe.name}</h2>
      <img src={this.props.recipe.img}/>
      <p>{this.props.recipe.ingredients}</p>

      </div>
    </div>
  )
}
}


export default RecipeCard;
