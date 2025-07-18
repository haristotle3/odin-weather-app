import { getToday } from "./dateHelpers";

export default class WeatherDOMHandler {
  constructor(newWeatherObject) {
    this.location = document.querySelector(`.root .location`);
    this.dayDate = document.querySelector(`.root .day-date`);

    this.weatherObject = newWeatherObject;

    this.updateDisplay();
  }

  updateDisplay() {
    this.location.textContent = this.weatherObject.getResolvedAddress();
    this.dayDate.textContent = getToday();
  }
}
