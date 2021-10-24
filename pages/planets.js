import React, { useState, useEffect } from 'react'

import { baseUrl, httpGet } from '../src/requests'
import Table from '../src/Table'


const Planets = (props) => {
  const [planets, setPlanets] = useState([])
  const [fetchMoreUrl, setFetchMoreUrl] = useState('')
  const [shouldFetchMore, setShouldFetchMore] = useState(false)

  async function fetchPlanets(url = `${baseUrl}/planets`) {
    const response = await httpGet(url)
    
    const {results: planetsHTTPResult, next: nextPageUrl} = response

    setPlanets([...planets, ...planetsHTTPResult])
    setFetchMoreUrl(nextPageUrl)
  }

  // Initial load
  useEffect(() => {
    fetchPlanets()
  }, [])

  // Pagination
  useEffect(() => {
    if (shouldFetchMore && fetchMoreUrl) {
      fetchPlanets(fetchMoreUrl)
      setShouldFetchMore(false)
    }
  }, [fetchMoreUrl, shouldFetchMore])
  
  const handleLoadMore = () => {
    setShouldFetchMore(true)
  }

  return (
    <main>
      <h1>Planets</h1>
      <span>Total results: {planets.length}</span>
      <hr />

      <Table data={planets} />

      <br/>
      <button onClick={handleLoadMore}>Load more</button>
    </main>
  )
}

Planets.propTypes = {

}

export default Planets
