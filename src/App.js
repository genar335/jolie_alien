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
          
      </div>
    </Router>
  );
}

export default App;