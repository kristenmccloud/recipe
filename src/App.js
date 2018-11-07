import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Faq from './pages/Faq';
import RecipeIndex from './pages/RecipeIndex';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Home from './pages/Home';
import RecipeCard from './components/RecipeCard';
import RecipeShow from './pages/RecipeShow';
import Woops from './pages/Woops';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
        <Switch>
          <Route path="/recipes/:id" component={RecipeShow} />
              <Route exact path="/" component={Home} />
              <Route exact path="/recipes" component={RecipeIndex} />
              <Route path="/about" component={About}/>
              <Route path="/faq" component={Faq} />
              <Route path="/contact"  component={Contact}/>
              <Route component={Woops} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
