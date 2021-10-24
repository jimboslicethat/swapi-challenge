import React, { useState, useEffect } from 'react'

import { getFromSwapi } from '../src/requests'


const Films = (props) => {
  const [films, setFilms] = useState([])

  useEffect(() => {
    async function fetchFilms() {
      const response = await getFromSwapi('films')
      const {results: filmsHttpResponse} = response

      setFilms(filmsHttpResponse)
    }

    fetchFilms()
  }, [])

  return (
    <main>
      <ul>
        {films.map(film => {
          return <li key={film.episode_id}>{film.title}</li>
        })}
      </ul>
    </main>
  )
}

Films.propTypes = {

}

export default Films
