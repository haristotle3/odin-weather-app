import { getToday, getDayOfTheWeek } from "./dateHelpers";

export default class WeatherDOMHandler {
  constructor(newWeatherObject) {
    this.location = document.querySelector(`.root .location`);
    this.dayDate = document.querySelector(`.root .day-date`);
    this.weatherImg = document.querySelector(`#weather-icon`);
    this.weatherSummaryTemp = document.querySelector(`#temperature`);
    this.weatherSummaryName = document.querySelector(`#weather-name`);
    this.weatherDetailContainer = document.querySelector(`.weather-details`);
    this.forecastGrid = document.querySelector(`.forecast-grid`);

    this.weatherObject = newWeatherObject;

    this.updateDisplay();
  }

  createDetailCardDiv(value, metric) {
    const div = document.createElement("div");
    div.classList.add("detail-card");

    const p1 = document.createElement("p");
    p1.classList.add("value");
    p1.textContent = value;

    switch (metric) {
      case "Humidity":
      case "Cloud Cover":
        p1.textContent += "%";
        break;
      case "Dew":
        p1.textContent += " °C";
        break;
      case "Windspeed":
        p1.textContent += " kmph";
        break;
    }

    const p2 = document.createElement("p");
    p2.classList.add("metric");
    p2.textContent = metric;

    div.appendChild(p1);
    div.appendChild(p2);

    return div;
  }

  updateDisplay() {
    this.location.textContent = this.weatherObject.getResolvedAddress();

    this.dayDate.textContent = getToday();
    (async () => {
      const importedImg = await import(
        `./assets/${this.weatherObject.getIcon()}.png`
      );
      this.weatherImg.src = importedImg.default;
    })();

    this.weatherSummaryTemp.textContent = this.weatherObject.getTemp();
    this.weatherSummaryName.textContent = this.weatherObject.getCondition();

    const cloudCover = this.createDetailCardDiv(
      this.weatherObject.cloudcover,
      `Cloud Cover`
    );
    const dew = this.createDetailCardDiv(this.weatherObject.dew, `Dew`);
    const humidity = this.createDetailCardDiv(
      this.weatherObject.humidity,
      `Humidity`
    );
    const sunriseTime = this.createDetailCardDiv(
      this.weatherObject.sunriseTime,
      `Sunrise Time`
    );
    const sunsetTime = this.createDetailCardDiv(
      this.weatherObject.sunsetTime,
      `Sunset Time`
    );
    const windspeed = this.createDetailCardDiv(
      this.weatherObject.windspeed,
      `Windspeed`
    );

    this.weatherDetailContainer.appendChild(cloudCover);
    this.weatherDetailContainer.appendChild(humidity);
    this.weatherDetailContainer.appendChild(sunriseTime);
    this.weatherDetailContainer.appendChild(windspeed);
    this.weatherDetailContainer.appendChild(dew);
    this.weatherDetailContainer.appendChild(sunsetTime);

    this.weatherObject.getWeekArr().forEach((day) => {
      const forecastCard = document.createElement("div");
      const h3Day = document.createElement("h3");
      const img = document.createElement("img");
      const h3FT = document.createElement("h3");

      forecastCard.className = "forecast-card";
      h3Day.className = "day";
      h3FT.className = "forecast-temperature";

      h3Day.textContent = getDayOfTheWeek(day.datetime);
      (async () => {
        const importedImg = await import(`./assets/${day.icon}.png`);
        img.src = importedImg.default;
      })();
      h3FT.textContent = day.temp + " °C";

      forecastCard.appendChild(h3Day);
      forecastCard.appendChild(img);
      forecastCard.appendChild(h3FT);

      this.forecastGrid.appendChild(forecastCard);
    });
  }

  changeLocation(newWeatherObject) {
    this.weatherObject = newWeatherObject;
    this.updateDisplay();
  }
}
