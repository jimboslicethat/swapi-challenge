import React, { useState, useEffect } from 'react'

import { getFromSwapi } from '../src/requests'


const Characters = (props) => {
  const [people, setPeople] = useState([])

  useEffect(() => {
    async function fetchPeople() {
      const response = await getFromSwapi('people')
      const {results: peopleHttpResponse} = response

      setPeople(peopleHttpResponse)
    }

    fetchPeople()
  }, [])

  return (
    <main>
      <ul>
        {people.map(person => {
          return <li key={person.name}>{person.name}</li>
        })}
      </ul>
    </main>
  )
}

Characters.propTypes = {

}

export default Characters
