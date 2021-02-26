import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar';
import HomePage from './components/pages/HomePage';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="bg-default container">
          <Navbar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/InfinityPacific" exact component={HomePage} />
            <Route path="/products" exact component={Products} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
