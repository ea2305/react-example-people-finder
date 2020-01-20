import React from 'react';
import './App.css';

// componets
import Header from './components/Header'
import List from './components/List'

function App() {
  return (
    <div className="App">
      <Header title="People finder" subtitle="Find and meet people"/>

      <div className="columns is-multiline is-mobile is-centered has-background-danger">
        <div className="column is-10 has-background-white">

          <List />

        </div>
      </div>
    </div>
  );
}

export default App;
