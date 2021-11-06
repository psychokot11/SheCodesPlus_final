function displayTempAndDate(response) {
  //temperature and conditions
  let tempElement = document.querySelector("#temperature");
  tempElement.innerHTML = Math.round(response.data.main.temp);
  let conditions = document.querySelector("#main-conditions");
  conditions.innerHTML = response.data.weather[0].description;
  console.log(response.data);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  let weatherIcon = document.querySelector("#weather-pic");
  let iconId = response.data.weather[0].icon;

  console.log(iconId);
  if (iconId === "01d" || iconId === "01n") {
    weatherIcon.innerHTML = "☀";
  } else if (iconId === "02d" || iconId === "02n") {
    weatherIcon.innerHTML = "🌤";
  } else if (iconId === "03d" || iconId === "03n") {
    weatherIcon.innerHTML = "⛅";
  } else if (iconId === "04d" || iconId === "04n") {
    weatherIcon.innerHTML = "☁";
  } else if (iconId === "09d" || iconId === "09n") {
    weatherIcon.innerHTML = "🌧";
  } else if (iconId === "10d" || iconId === "10n") {
    weatherIcon.innerHTML = "🌦";
  } else if (iconId === "11d" || iconId === "11n") {
    weatherIcon.innerHTML = "⛈";
  } else if (iconId === "13d" || iconId === "13n") {
    weatherIcon.innerHTML = "❄";
  } else if (iconId === "50d" || iconId === "50n") {
    weatherIcon.innerHTML = "🌫";
  }

  //date and time
  let dateElement = document.querySelector("#current-day");
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = date.getDate();
  dateElement.innerHTML = `${weekDay[day]} ${hour}:${minute}`;

  // celcius to farenheit
  let celciusTemp = document.querySelector("#celcius");
  let farenheitTemp = document.querySelector("#farenheit");

  function changeToCelcius(event) {
    event.preventDefault();
    tempElement.innerHTML = Math.round(response.data.main.temp);
  }

  function changeToFarenheit(event) {
    event.preventDefault();
    tempElement.innerHTML = Math.round((response.data.main.temp * 9) / 5 + 32);
  }

  celciusTemp.addEventListener("click", changeToCelcius);
  farenheitTemp.addEventListener("click", changeToFarenheit);
}

let weatherApiKey = "5f499f0d563e2b69490e35e28cf5fd01";
let cityInput = document.querySelector("#search-field");
// city = `${cityInput.value}`;
city = "Paris";
let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`;
axios.get(weatherUrl).then(displayTempAndDate);

function searchCity(event) {
  event.preventDefault();
  let searchFieldInput = document.querySelector("#search-field");
  let searchedCity = document.querySelector("#searched-city");
  searchedCity.innerHTML = `${searchFieldInput.value}`;
  console.log(searchFieldInput.value);
}

let searchButtonElem = document.querySelector("#form");
searchButtonElem.addEventListener("submit", searchCity);
