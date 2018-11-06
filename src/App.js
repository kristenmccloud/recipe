import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Faq from './pages/Faq';
import Recipes from './pages/Recipes';
import RecipeCard from './components/RecipeCard';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Router>
          <div>
            <Route path="/recipes" component={Recipes} />
            <Route path="/about" component={About}/>
            <Route path="/faq" component={Faq} />
            <Route path="/contact"  component={Contact}/>
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
