
export const baseUrl = 'https://swapi.dev/api/'

export async function httpGet(endpoint = baseUrl) {
  const request = await fetch(endpoint)
  const response = await request.json()

  console.info('Request Response', response.results, response)

  return response
}
