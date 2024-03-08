import React from 'react';
import './App.css';
import Navbar from './navbar.jsx'
import Display from './display.jsx';
import Row from './row.jsx'
import { BookContextProvider } from './BookContext.js';


function App() {

  return (
    <div className="App">
      <BookContextProvider>
      <Navbar />
      <Display/>
      <Row
      title="All Books"
      />
      </BookContextProvider>
    </div>

  );
}

export default App;
