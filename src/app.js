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
let city = "Paris";
let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`;
axios.get(weatherUrl).then(displayTempAndDate);

let searchButtonElem = document.querySelector("#form");

function searchCity(event) {
  event.preventDefault();
  let searchFieldInput = document.querySelector("#search-field");
  let searchedCity = document.querySelector("#searched-city");
  searchedCity.innerHTML = `${searchFieldInput.value}`;
  console.log(searchFieldInput.value);
}
searchButtonElem.addEventListener("submit", searchCity);
