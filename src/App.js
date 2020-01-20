import React, { Component } from 'react';
import './App.css';

// componets
import Header from './components/Header'
import Filter from './components/Filter'
import List from './components/List'

class App extends Component {
  constructor () {
    super()
    this.state = {
      page: 1,
      pages: 1,
      perPage: 50,
      gender: ''
    }
  }

  render () {
    const filters = this.state
    return (
      <div className="App">
        <Header title="People finder" subtitle="Find and meet people"/>

        <div className="columns is-multiline is-mobile is-centered has-background-danger">
          <div className="column is-10 has-background-white">
            { /** filters */}
            <Filter {...filters}/>

            { /** render body components */}
            <List {...filters}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
