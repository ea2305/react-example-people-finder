import React, { Component } from 'react'
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  baseColor: PropTypes.string
}

const defaultProps = {
  title: 'Title',
  subtitle: 'Example subtitle props',
  baseColor: 'is-black'
}

class Header extends Component {
  render () {
    // render style content
    const heroClass = `hero ${this.props.baseColor}`
    return (
      <section className={heroClass}>
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              { this.props.title }
            </h1>
            <h2 className="subtitle">
              { this.props.subtitle }
            </h2>
          </div>
        </div>
      </section>
    )
  }
}

Header.propTypes = propTypes
Header.defaultProps = defaultProps

export default Header