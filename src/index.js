import WeatherDOMHandler from "./domElementsHandler";
import { getWeather } from "./weatherAPI";
import "./style.css";

(async function test() {
  const weather = await getWeather();
  console.log(weather)
  const DOM = new WeatherDOMHandler(weather);
})();
