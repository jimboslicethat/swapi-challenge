import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Table = (props) => {
  const { data } = props
  const [headerList, setHeaderList] = useState([])

  useEffect(() => {
    if (data.length > 0) {
      setHeaderList(Object.keys(data[0]))
    }
  }, [data])

  return (
    <table>
      <thead>
        <tr>
          {headerList.map(header => <th key={header}>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map(row => {
          const entries = Object.entries(row)

          return (
            <tr key={entries[0]}>
              {entries.map(entry => {
                const [key, value] = entry
  
                return (
                  <td key={key}>
                    {value}
                  </td>
                )
              })}
            </tr>
          )
        })
        }
      </tbody>
    </table>
  )
}

Table.propTypes = {
  data: PropTypes.array
}

Table.defaultProps = {
  data: []
}

export default Table
