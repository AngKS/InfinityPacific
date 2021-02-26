import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar';
import HomePage from './components/pages/HomePage';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';
import About from './components/pages/About';


function App() {
  return (
    <div className="App container">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/InfinityPacific" exact component={HomePage} />
          <Route path="/products" exact component={Products} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
