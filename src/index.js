import "./style.css";
import { getWeather } from "./weatherAPI";
import getDayOfTheWeek from "./dateHelpers";
import initializeWeather from "./localStorageHandler";

initializeWeather();
