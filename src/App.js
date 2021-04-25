import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Header />
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
