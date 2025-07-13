const vcAPIkey = `3MLWADDZA3VLRW3THLLEXTEUC`;

class WeatherInformation {
  constructor(weatherJsonObject) {
    this.icon = weatherJsonObject.currentConditions.icon;
    this.temp = weatherJsonObject.currentConditions.temp;
    this.humidity = weatherJsonObject.currentConditions.humidity;
    this.dew = weatherJsonObject.currentConditions.dew;
    this.condition = weatherJsonObject.currentConditions.conditions;
    this.sunriseTime = weatherJsonObject.currentConditions.sunrise;
    this.sunsetTime = weatherJsonObject.currentConditions.sunset;
    this.windspeed = weatherJsonObject.currentConditions.windspeed;
    this.cloudcover = weatherJsonObject.currentConditions.cloudcover;
    this.weekArr = this.constructWeekArr(weatherJsonObject);

    console.log(this);
  }

  constructWeekArr(weatherJsonObject) {
    const weekArr = [];

    for (let i = 0; i < 7; i++) {
      weekArr.push({
        datetime: weatherJsonObject.days[i].datetime,
        icon: weatherJsonObject.days[i].icon,
        temp: weatherJsonObject.days[i].temp,
      });
    }

    return weekArr;
  }

  getIcon() {
    return this.icon;
  }

  getTemp() {
    return this.temp;
  }

  getHumidity() {
    return this.humidity;
  }
  getDew() {
    return this.dew;
  }
  getCondition() {
    return this.condition;
  }
  getSunriseTime() {
    return this.sunriseTime;
  }
  getWindspeed() {
    return this.windspeed;
  }
  getCloudCover() {
    return this.cloudcover;
  }
  getWeekArr() {
    return this.weekArr;
  }
}

function constructURL(location, temperatureUnit) {
  const farenheitUnitGroup = "us";
  const celsiusUnitGroup = "metric";
  const unitGroup =
    temperatureUnit === "F" ? farenheitUnitGroup : celsiusUnitGroup;
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unitGroup}&include=days%2Calerts%2Ccurrent&key=${vcAPIkey}&contentType=json`;
  return url;
}

async function fetchWeather(url) {
  const vcResponse = await fetch(url, { mode: "cors" });
  const json = await vcResponse.json();
  return json;
}

async function getWeather(location = `Delhi`, temperatureUnit = "C") {
  const url = constructURL(location, temperatureUnit);
  console.log(url);
  const weatherInfo = await fetchWeather(url);

  const weatherObj = new WeatherInformation(weatherInfo);
}

export { getWeather };
