import React, { useState, useEffect } from 'react'
import { Table as ChakraTable, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'
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
    <ChakraTable size="sm">
      <Thead>
        <Tr>
          {headerList.map(header => <Th key={header}>{header}</Th>)}
        </Tr>
      </Thead>
      <Tbody>
        {data.map(row => {
          const entries = Object.entries(row)

          return (
            <Tr key={entries[0]}>
              {entries.map(entry => {
                const [key, value] = entry
  
                return (
                  <Td key={key}>
                    {value}
                  </Td>
                )
              })}
            </Tr>
          )
        })
        }
      </Tbody>
    </ChakraTable>
  )
}

Table.propTypes = {
  data: PropTypes.array
}

Table.defaultProps = {
  data: []
}

export default Table
