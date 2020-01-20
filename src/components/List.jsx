import React, { Component } from 'react'

// import components
import ListItem from './ListItem'

class List extends Component {
  constructor () {
    super()
    this.state = { users: [] }
    this.fetchData = this.fetchData.bind(this)
  }
  componentDidMount () {
    this.fetchData()
  }

  fetchData () {
    const { seed, page, perPage } = this.props
    fetch(`https://api.randomuser.me/?page=${page}&results=${perPage}&seed?=${seed}`)
      .then(res => res.json())
      .then(data => this.usersFilter(data))
      .then(users => { this.setState({ users }) })
  }

  usersFilter (data) {
    this.props.setFilters({ pages: 5 })
    return data.results.map(user => ({
      id: user.login.uuid,
      picture: user.picture.medium,
      fullname: `${user.name.title} ${user.name.first} ${user.name.last}`,
      from: user.location.country
    }))
  }

  render () {
    const items = this.state.users.map(user => {
      // remove irrelevant props
      const { id, ...listItemProps } = user
      return <ListItem key={id} {...listItemProps} />
    })

    return <div> { items } </div>
  }
}

export default List