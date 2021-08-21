function displayTemperature(response) {
  let cityElement = document.querySelector("#Location");
  let tempElement = document.querySelector("#todayTemp");
  let describElement = document.querySelector("#description");
  let humidElement = document.querySelector("#humid");
  let windElement = document.querySelector("#wind");
  tempElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  describElement.innerHTML = response.data.weather[0].description;
  humidElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "bf5ae209a0b09a0d9e56392578472509";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
