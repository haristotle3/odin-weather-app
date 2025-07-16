import { getWeather } from "./weatherAPI";

export default async function getInitWeather() {
  if (!localStorage.getItem("defaultWeather")) {
    const currentWeather = await getWeather("Delhi");
    localStorage.setItem("defaultWeather", JSON.stringify(currentWeather));
    return currentWeather;
  }
  const initWeather = JSON.parse(localStorage.getItem("defaultWeather"));
  return initWeather;
}

function updateLocalStorage(newWeather) {
  localStorage.setItem("defaultWeather", JSON.stringify(newWeather));
  return;
}
