import React, { Component } from 'react'

// import components
import ListItem from './ListItem'

class List extends Component {
  render () {
    const items = this.props.users.map(user => {
      // remove irrelevant props
      const { id, ...listItemProps } = user
      return <ListItem key={id} {...listItemProps} />
    })

    return <div> { items } </div>
  }
}

export default List