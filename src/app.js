function displayTempAndDate(response) {
  let tempElement = document.querySelector("#temperature");
  tempElement.innerHTML = Math.round(response.data.main.temp);
  let conditions = document.querySelector("#main-conditions");
  conditions.innerHTML = response.data.weather[0].description;
  console.log(response.data);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  let dateElement = document.querySelector("#current-day");
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
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
}

let weatherApiKey = "5f499f0d563e2b69490e35e28cf5fd01";
let city = "Paris";
let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`;
console.log(weatherUrl);

axios.get(weatherUrl).then(displayTempAndDate);

//let date = Date.

//let dateElement = document.querySelector("#current-day");
//dateElement.innerHTML = day[date]
