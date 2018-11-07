import React, { Component } from 'react';
import recipes from "../Store";

class RecipeShow extends Component {
  render() {
    const id = this.props.match.params.id - 1

    return (
      <div>
        <h1>{recipes[id].name}</h1>
        <img src={recipes[id].img}/>
        <h2>What you'll need: </h2>
        <h3>{recipes[id].ingredients}</h3>
      </div>
    )
  }
}

export default RecipeShow;
