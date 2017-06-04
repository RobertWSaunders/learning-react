const API_KEY = 'mykey';
const URL = 'myurl';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${URL}&q=${city},us`;
  const request = axios.get(url);
  return (
    type: FETCH_WEATHER,
    payload: request
  );
}
// actions creators are functions that make actions
