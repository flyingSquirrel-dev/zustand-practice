export const httpClient = {
  get,
}

async function get<T>(apiURL: string): Promise<T> {
  const fetchResponse = await fetch(apiURL);
  const responseJson = await fetchResponse.json();

  return responseJson;
}
