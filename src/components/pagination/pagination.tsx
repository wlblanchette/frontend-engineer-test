import React, { FunctionComponent } from 'react'

const Pagination: FunctionComponent = () => {
  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <button type="button" className="pagination-next">Next</button>
      <button type="button" className="pagination-previous is-disabled">Prev</button>
    </nav>
  )
}

export default Pagination
