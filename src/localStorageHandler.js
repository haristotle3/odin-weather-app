import { getWeather } from "./weatherAPI";

function updateLocalStorage(newWeather) {
  localStorage.setItem("defaultWeather", JSON.stringify(newWeather));
  return;
}

export default async function getInitWeather() {
  if (!localStorage.getItem("defaultWeather")) {
    const currentWeather = await getWeather("Delhi");
    updateLocalStorage(currentWeather);
    return currentWeather;
  }
  const initWeather = JSON.parse(localStorage.getItem("defaultWeather"));
  return initWeather;
}
