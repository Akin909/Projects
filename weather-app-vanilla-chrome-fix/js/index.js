"use strict";

console.clear();

function location(url) {
  var firstRequest = new XMLHttpRequest();
  firstRequest.open('GET', url);

  firstRequest.onload = function () {
    // console.log(JSON.parse(firstRequest.response))
    var data = JSON.parse(firstRequest.response);
    var city = data.city;

    get(city);
  };
  firstRequest.send();
}

function displayLocation(city) {}
var myLocation = "https://freegeoip.net/json/";
location(myLocation);

function get(city) {
  console.log(city);
  var key = "42d207f53e69cf00735dc017f645e0d0";
  // var parisURL =
  // "http://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&APPID=93b0b9be965a11f0f099c8c7f74afa63"
  var weather = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=" + key;
  var request = new XMLHttpRequest();
  request.open('GET', weather);
  request.onload = function () {
    if (request.status === 200) {
      console.log(request);
      displayWeather(JSON.parse(request.response));
    } else {
      throw new Error('network error');
    }
  };
  request.send();

  function displayWeather(data) {
    var currentSky = data.weather[0].description;
    var currentIcon = data.weather[0].icon;
    var currentTemp = data.main.temp;
    var currentCity = data.name;
    var currentCountry = data.sys.country;
    var tempElement = document.getElementById('temp');
    tempElement.textContent = currentTemp + "°C";
    var cityElement = document.getElementById('city');
    cityElement.textContent = currentCity + ", " + currentCountry;
    var skyElement = document.getElementById('sky');
    skyElement.textContent = currentSky;
    var iconElement = document.getElementById('icon');
    iconElement.innerHTML = "<img src= \"http://openweathermap.org/img/w/" + currentIcon + ".png\">";
    var count = 1;

    function fahrenheit(currentTemp) {
      return currentTemp * (9 / 5) + 32;
    }
    document.getElementById('temp').onclick = function () {
      if (count > 0 && count % 2 !== 0) {
        console.log(fahrenheit(currentTemp));
        count++;
        console.log(count);
        var newTemp = Math.round(fahrenheit(currentTemp));
        return tempElement.textContent = newTemp + "°F";
      } else if (count % 2 === 0) {
        count++;
        return tempElement.textContent = currentTemp + "°C";
      }
    };
  }
}