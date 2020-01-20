import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  picture: PropTypes.string.isRequired,
  fullname: PropTypes.string.isRequired,
  from: PropTypes.string,
}

class ListItem extends Component {
  render () {
    return (
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={this.props.picture} alt={`About ${this.props.fullname}`} />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{ this.props.fullname }</p>
              <p className="subtitle is-6">{ this.props.from }</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ListItem.propTypes = propTypes

export default ListItem