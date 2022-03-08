// Copyright (c) 2016-present, CloudZero, Inc. All rights reserved.
// Licensed under the BSD-style license. See LICENSE file in the project root for full license information.
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
