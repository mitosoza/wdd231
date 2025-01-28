
let todayMaxTemp = 0;

const lat = 40.889389;
const lon = -111.880768;
const APIKey = '2ff7d0f9334ae18a8a6e8d82f364d9e5';
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=imperial`;
const forecastWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}&units=imperial`;

/* Current Weather Data */
async function getCurrentWeatherData() {
    try {
      const response = await fetch(currentWeatherUrl);
      if (response.ok) {
        const data = await response.json();
        //console.log(data);
        //console.log("temp:", data.main.temp);
        //console.log("icon:", data.weather[0].icon);
        displayCurrentWeather(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}

function displayCurrentWeather(data) {
    let weatherIcon = document.createElement('img');
    let currentTemp = document.createElement('h3');
    let weatherDesc = document.createElement('p');
    let tempHigh = document.createElement('p');
    let tempLow = document.createElement('p');
    let humidity = document.createElement('p');
    let sunrise = document.createElement('p');
    let sunset = document.createElement('p');

    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    currentTemp.textContent = `${Math.round(data.main.temp)}\u00B0 F`;
    weatherDesc.textContent = data.weather[0].description;
    todayMaxTemp = data.main.temp_max;
    tempHigh.textContent = `High: ${Math.round(data.main.temp_max)}\u00B0 F`;
    tempLow.textContent = `Low: ${Math.round(data.main.temp_min)}\u00B0 F`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    sunrise.textContent = `Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    sunset.textContent = `Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

    const currentWeather = document.querySelector('#current-weather');

    const weatherDetails = document.createElement('div');
    weatherDetails.appendChild(currentTemp);
    weatherDetails.appendChild(weatherDesc);
    weatherDetails.appendChild(tempHigh);
    weatherDetails.appendChild(tempLow);
    weatherDetails.appendChild(humidity);
    weatherDetails.appendChild(sunrise);
    weatherDetails.appendChild(sunset);

    currentWeather.appendChild(weatherIcon);
    currentWeather.appendChild(weatherDetails);
}

/* Forecast Weather Data */
async function getForecastWeatherData() {
    try {
        const response = await fetch(forecastWeatherUrl);
        if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only

        displayForecastWeather(data.list);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayForecastWeather(dataList) {
    let tempToday = document.createElement('p');
    let tempTomorrow = document.createElement('p');
    let temp2Days = document.createElement('p');

    let tomorrowDayName = new Date(dataList[7].dt_txt).toLocaleDateString('en-US', { weekday: 'long' });
    let twoDaysDayName = new Date(dataList[15].dt_txt).toLocaleDateString('en-US', { weekday: 'long' });
    tempToday.textContent = `Today: ${Math.round(todayMaxTemp)}\u00B0 F`;
    tempTomorrow.textContent = `${tomorrowDayName}: ${Math.round(dataList[7].main.temp_max)}\u00B0 F`;
    temp2Days.textContent = `${twoDaysDayName}: ${Math.round(dataList[15].main.temp_max)}\u00B0 F`;

    const currentWeather = document.querySelector('#forecast-weather');
    currentWeather.appendChild(tempToday);
    currentWeather.appendChild(tempTomorrow);
    currentWeather.appendChild(temp2Days);
}

getCurrentWeatherData();
getForecastWeatherData();