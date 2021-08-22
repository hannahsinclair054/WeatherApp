//time
function formateDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}
// conversion of temperature
function celsToFahr(event) {
  event.preventDefault();
  let tempE1 = document.querySelector("#todayTemp");
  let temp1 = tempE1.innerHTML;
  tempE1.innerHTML = Math.round((temp1 * 9) / 5 + 32);
}
let fahr = document.querySelector("#tempUnitF");
fahr.addEventListener("click", celsToFahr);
//Temp Fahr to Cels
function fahrToCels(event) {
  let tempE2 = document.querySelector("#todayTemp");
  let temp2 = tempE2.innerHTML;
  tempE2.innerHTML = Math.round((temp2 - 32) * (5 / 9));
}
let cels = document.querySelector("#tempUnitC");
cels.addEventListener("click", fahrToCels);

//display temperature and related info
function displayTemperature(response) {
  let cityElement = document.querySelector("#Location");
  let tempElement = document.querySelector("#todayTemp");
  let describElement = document.querySelector("#description");
  let humidElement = document.querySelector("#humid");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");
  let icon = response.data.weather[0].icon;
  cityElement.innerHTML = response.data.name;
  tempElement.innerHTML = Math.round(response.data.main.temp);
  describElement.innerHTML = response.data.weather[0].description;
  humidElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formateDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    "https:openweathermap.org/img/wn/" + icon + "@2x.png"
  );

  iconElement.setAttribute("alt", response.data.weather[0].description);
}
function search(city) {
  let apiKey = "bf5ae209a0b09a0d9e56392578472509";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let inputElement = document.querySelector("#search-input");
  search(inputElement.value);
}
search("New York");

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
