import axios from 'axios';

const API_KEY = "7ac18da760b393e2c5efdcda9ee743ff";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&APPID=${API_KEY}`;
// const url =      "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=7ac18da760b393e2c5efdcda9ee743ff";

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  
  console.log('request ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}