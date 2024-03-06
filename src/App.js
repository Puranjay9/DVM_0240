import React from 'react';
import './App.css';
import Navbar from './navbar.js'
import Display from './display.js';
import Row from './row.js'
function App() {


  return (
    <div className="App">
      <Navbar />
      <Display/>
      <Row
      title="All Books"
      />
    </div>

  );
}

export default App;
