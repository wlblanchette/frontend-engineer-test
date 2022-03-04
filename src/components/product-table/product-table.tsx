import React, { FunctionComponent } from 'react'
import { ProductColumn, ProductData } from '../../types'
import "./product-table.css"

type Props = {
  cols: ProductColumn[]
  rows: ProductData[]
}
const ProductTable: FunctionComponent<Props> = ({rows, cols}) => {
  return (
    <div className="product-table table-container">
      <table className="table is-striped is-hoverable">
        <thead>
        {cols.map(col => (
          <th key={col.field}>{col.display_name}</th>
        ))}
        </thead>
        <tbody>
        {rows.map(row => (
          <tr key={row.product_id}>
            <td>{row.product_name}</td>
            <td>{row.release_date}</td>
            <td>{row.last_update}</td>
            <td>{row.purpose}</td>
            <td>{row.service_type}</td>
            <td>{row.resource_type}</td>
            <td>{row.service_attributes.physicalProcessor.display_value}</td>
            <td>{row.service_attributes.networkPerformance.display_value}</td>
            <td>{row.service_attributes.dedicatedEbsThroughput.display_value}</td>
            <td>{row.service_attributes.vcpu.display_value}</td>
            <td>{row.service_attributes.memory.display_value}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable
