import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Route exact path="/about" render={props => (
          <div>
            Hello
          </div>
        )} />

        <Route exact path="/contact" render={props => (
          <div>
            Some contact info
          </div>
        )} />

        <Route exact path="/faq" render={props => (
          <div>
            Faq 
          </div>
        )} />
          
      </div>
    </Router>
  );
}

export default App;