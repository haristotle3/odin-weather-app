const vcAPIkey = `3MLWADDZA3VLRW3THLLEXTEUC`;

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

async function getWeather(location = `New Delhi`, temperatureUnit = "C") {
  const url = constructURL(location, temperatureUnit);
  const weatherInfo = await fetchWeather(url);

  const weatherObj = weatherInfo;
  const testObj = {
    icon: weatherObj.currentConditions.icon,
    temp: weatherObj.currentConditions.temp,
    humidity: weatherObj.currentConditions.humidity,
    dew: weatherObj.currentConditions.dew,
    condition: weatherObj.currentConditions.conditions,
    sunriseTime: weatherObj.currentConditions.sunrise,
    sunsetTime: weatherObj.currentConditions.sunset,
    windspeed: weatherObj.currentConditions.windspeed,
    cloudcover: weatherObj.currentConditions.cloudcover,
    weekArr: weatherObj.days,
  };
}

export { fetchWeather };
