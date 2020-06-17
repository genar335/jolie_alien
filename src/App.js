import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import About from './components/About.jsx';
import Courses from './components/Courses.jsx';
import Team from './components/Team.jsx';
import Contact from './components/Contact.jsx';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Route exact path="/" render={props => (
          <Redirect from="/" to="/about" />
        )} />

        <Route exact path="/about" render={props => (
          <About />
        )} />

        <Route exact path="/courses" render={props => (
          <Courses />
        )} />

        <Route exact path="/team" render={props => (
          <Team />
        )} />

        <Route exact path="/contact" render={props => (
          <Contact />
        )} />

        {/* Social media routing */}

        <Route exact path="/insta" render={() => {
            window.location.href = "https://www.instagram.com"
            return null
          }
        } />

        <Route exact path="/twitter" render={() => {
            window.location.href = "https://www.twitter.com"
            return null
          }
        } />

        <Route exact path="/facebook" render={() => {
            window.location.href = "https://www.facebook.com"
            return null
          }
        } />

        <Footer />
          
      </div>
    </Router>
  );
}

export default App;