import React, { useState, useEffect } from 'react'
import { Heading, Button, Text, Divider } from '@chakra-ui/react'

import { baseUrl, httpGet } from '../src/requests'
import Table from '../src/Table'


const Planets = (props) => {
  const [planets, setPlanets] = useState([])
  const [fetchMoreUrl, setFetchMoreUrl] = useState('')
  const [shouldFetchMore, setShouldFetchMore] = useState(false)

  async function fetchPlanets(url = `${baseUrl}/planets`) {
    const response = await httpGet(url)
    
    const {results: planetsHTTPResult, next: nextPageUrl} = response

    const planetsWithResidents = await fetchPlanetsResidents(planetsHTTPResult)

    setPlanets([...planets, ...planetsWithResidents])
    setFetchMoreUrl(nextPageUrl)
  }

  // fetch the residents of each planet
  async function fetchPlanetsResidents(planets) {
    const planetsWithResidentsPromises = planets.map(async planet => {
      const { residents } = planet

      const residentNamePromises = await residents.map(async residentUrl => {
        const data = await httpGet(residentUrl)

        return data.name
      })

      const residentNames = await Promise.all(residentNamePromises)

      return {
        ...planet,
        residents: residentNames
      }
    })

    return await Promise.all(planetsWithResidentsPromises)
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
      <Heading as="H1">Planets</Heading>
      <Text fontSize="2xl">Total results: {planets.length}</Text>
      <Divider />

      <Table data={planets} />

      <br/>
      <Button onClick={handleLoadMore}>Load more</Button>
    </main>
  )
}

Planets.propTypes = {

}

export default Planets
