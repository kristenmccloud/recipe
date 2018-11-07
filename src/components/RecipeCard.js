import React, { Component } from 'react';
// import recipes from '../store';

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
    let { recipe } = this.props
  return (
    <div className="RecipeCard">
      <div>
      <h2>{recipe.name}</h2>
      <img src={recipe.img}/>
      <p>{recipe.ingredients}</p>

      </div>
    </div>
  )
}
}

export default RecipeCard
