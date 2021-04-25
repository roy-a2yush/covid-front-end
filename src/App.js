import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import Home from './pages';
import About from './pages/About';

function App() {
  return (
    <Router>


      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/about' component={About}></Route>
      </Switch>
      <Route
        path='/'
        exact
        render={(props) => (
          <>
            {/* Design the homepage in components assemble them here */}
          </>
        )}
      />
      {/* <Route path='<mentionPathsForOtherPages>' <exact> component={} /> */}
      <Footer />
    </Router>
  );
}

export default App;
