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
      pages: 5,
      perPage: 50,
      gender: '',
      seed: 'examplereact2'
    }

    this.setFilters = this.setFilters.bind(this)
  }

  setFilters ({ page, pages, perPage, gender }) {
    // update data from props
    page = page || this.state.page
    pages = pages || this.state.pages
    perPage = perPage || this.state.perPage
    gender = gender || this.state.gender

    this.setState( { page, pages, perPage, gender } )
  }

  render () {
    const filters = this.state
    return (
      <div className="App">
        <Header title="People finder" subtitle="Find and meet people"/>

        <div className="columns is-multiline is-mobile is-centered has-background-danger">
          <div className="column is-10 has-background-white">
            { /** filters */}
            <Filter {...filters} setFilters={this.setFilters} />

            { /** render body components */}
            <List {...filters} setFilters={this.setFilters}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
