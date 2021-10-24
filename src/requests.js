
const baseUrl = 'https://swapi.dev/api/'

export async function getFromSwapi(endpoint) {
  const request = await fetch(`${baseUrl}/${endpoint}`)
  const response = await request.json()

  console.info('SWAPI Request Response', response.results, response)

  return response
}
