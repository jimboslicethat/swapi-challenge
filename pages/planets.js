import React, { useState, useEffect } from 'react'

import { baseUrl, httpGet } from '../src/requests'


const Planets = (props) => {
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    async function fetchPlanets() {
      const response = await httpGet(`${baseUrl}/planets`)
      const {results: planetsHTTPResult} = response

      setPlanets(planetsHTTPResult)
    }

    fetchPlanets()
  }, [])

  return (
    <main>
      <h1>Planets</h1>
      <hr />

      <table>
        <thead>
        <tr>
          {planets.length > 0
            ? Object.keys(planets[0]).map(header => {
            return (
              <th key={header}>{header}</th>
            )})
            : null
        }
        </tr>
        </thead>
        <tbody>
          {planets.map(planet => {
            const entries = Object.entries(planet)
            return (
              <tr key={planet.name}>
                {
                  entries.map(entry => {
                    const [key, value] = entry
                    return (
                        <td key={key}>{value}</td>
                    )
                  })
                }
              </tr>
            )
          })}
        </tbody>
      </table>
    </main>
  )
}

Planets.propTypes = {

}

export default Planets
