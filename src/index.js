import WeatherDOMHandler from "./domElementsHandler";
import { getWeather } from "./weatherAPI";
import "./style.css";

(async () => {
  const weather = await getWeather();
  const DOM = new WeatherDOMHandler(weather);
})();
