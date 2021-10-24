import React, { useState, useEffect } from 'react'

import { getFromSwapi } from '../src/requests'


const Planets = (props) => {
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    async function fetchPlanets() {
      const response = await getFromSwapi('planets')
      const {results: planetsHTTPResult} = response

      setPlanets(planetsHTTPResult)
    }

    fetchPlanets()
  }, [])

  return (
    <main>
      <ul>
        {planets.map(planet => {
          return <li key={planet.name}>{planet.name}</li>
        })}
      </ul>
    </main>
  )
}

Planets.propTypes = {

}

export default Planets
