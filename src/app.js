function displayTemp(response) {
  let tempElement = document.querySelector("#temperature");
  tempElement.innerHTML = Math.round(response.data.main.temp);
  let conditions = document.querySelector("#main-conditions");
  conditions.innerHTML = response.data.weather[0].description;
  console.log(response.data);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let weatherApiKey = "5f499f0d563e2b69490e35e28cf5fd01";
let city = "Paris";
let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`;
console.log(weatherUrl);

axios.get(weatherUrl).then(displayTemp);

//let date = Date.
//let day = [
//"Sunday",
//"Monday",
//"Tuesday",
//"Wednesday",
//"Thursday",
//"Friday",
//"Saturday",
//];
//let dateElement = document.querySelector("#current-day");
//dateElement.innerHTML = day[date]
