const URL_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function getApiUrl() {
  const response = await fetch(`${URL_API}`);
  const apiUrl = await response.json();

  return apiUrl;
}

export default getApiUrl;
