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
      seed: 'examplereact2',
      users: []
    }

    this.fetchData = this.fetchData.bind(this)
    this.setFilters = this.setFilters.bind(this)
    this.usersFilter = this.usersFilter.bind(this)
  }

  componentDidMount () {
    this.fetchData()
  }

  fetchData () {
    const { seed, page, perPage } = this.state
    fetch(`https://api.randomuser.me/?page=${page}&results=${perPage}&seed?=${seed}`)
      .then(res => res.json())
      .then(data => this.usersFilter(data))
      .then(users => { this.setState({ users }) })
  }

  usersFilter (data) {
    this.setState({ pages: 5 })
    return data.results.map(user => ({
      id: user.login.uuid,
      picture: user.picture.medium,
      fullname: `${user.name.title} ${user.name.first} ${user.name.last}`,
      from: user.location.country
    }))
  }

  setFilters ({ page, pages, perPage, gender }) {
    // update data from props
    page = page || this.state.page
    pages = pages || this.state.pages
    perPage = perPage || this.state.perPage
    gender = gender || this.state.gender

    this.setState( { page, pages, perPage, gender } )
    this.fetchData()
  }

  render () {
    const { users, ...filters} = this.state
    return (
      <div className="App">
        <Header title="People finder" subtitle="Find and meet people"/>

        <div className="columns is-multiline is-mobile is-centered has-background-danger">
          <div className="column is-10 has-background-white">
            { /** filters */}
            <Filter {...filters} setFilters={this.setFilters} />

            { /** render body components */}
            <List users={users} {...filters} setFilters={this.setFilters}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
