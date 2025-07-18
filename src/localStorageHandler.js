import { getWeather } from "./weatherAPI";
const DEFAULT_LOCATION = `Delhi`;

function updateLocalStorage(newWeather) {
  localStorage.setItem("defaultWeather", JSON.stringify(newWeather));
  return;
}

export default async function getInitWeather() {
  if (!localStorage.getItem("defaultWeather")) {
    const currentWeather = await getWeather(DEFAULT_LOCATION);
    updateLocalStorage(currentWeather);
    return currentWeather;
  }
  const initWeather = JSON.parse(localStorage.getItem("defaultWeather"));
  return initWeather;
}

// should add methods to the locally stored objects
