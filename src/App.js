import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Recipes from './Recipes';
import RecipeCard from './RecipeCard'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Recipes />
      </div>
    );
  }
}

export default App;
