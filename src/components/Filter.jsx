import React, { Component } from 'react'

class Filter extends Component {
  render () {
    /**
     * page
     * gender
     */
    const { page, pages } = this.props
    return (
      <div className="container">

        { /** bottom */}
        <div>
        <nav className="pagination" role="navigation" aria-label="pagination">

          <button
            onClick={() => this.props.setFilters({ page: page - 1 })}
            className="pagination-previous" disabled={ page <= 1 }>
              Prev
          </button>
          <button
            onClick={() => this.props.setFilters({ page: page + 1 })}
            className="pagination-next"
            disabled={ page >= pages }>
              Next
          </button>

          <ul className="pagination-list">

            { ([...Array(pages).keys()].map(key => {
              let currentPage = key + 1
              let pageClass = 'pagination-link'
              const isCurrent = page === currentPage

              if (isCurrent) {
                pageClass += ' is-current'
              }

              return (
                <li key={key}>
                  <button onClick={() => this.props.setFilters({ page: currentPage })} className={pageClass} aria-label={ `page ${currentPage}` } aria-current="page">{currentPage}</button>
                </li>
              )
            })) }

          </ul>
        </nav>
        </div>

      </div>
    )
  }
}

export default Filter