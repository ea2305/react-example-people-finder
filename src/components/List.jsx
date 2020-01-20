import React, { Component } from 'react'

class List extends Component {
  constructor () {
    super()
    this.state = {
      users: []
    }
  }
  componentDidMount () {
    fetch("https://api.randomuser.me/?results=50")
      .then(res => res.json())
      .then(data => this.usersFilter(data))
      .then(users => { this.setState({ users }) })
  }

  usersFilter (data) {
    return data.results.map(user => ({
      id: user.login.uuid,
      picture: user.picture.medium,
      fullname: `${user.name.title} ${user.name.first} ${user.name.last}`,
      from: user.location.country
    }))
  }

  render () {
    const items = this.state.users.map(user => {
      return (
        <div className="card" key={user.id}>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={user.picture} alt={`About ${user.fullname}`} />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{ user.fullname }</p>
                <p className="subtitle is-6">{ user.from }</p>
              </div>
            </div>
          </div>
        </div>
      )
    })

    return <div> { items } </div>
  }
}

export default List