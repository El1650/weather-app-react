import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Weather() {
  let [temp, setTemp] = useState(null);

  function setTime(timestamp) {
    let now = new Date();
    let hr = now.getHours();
    if (hr < 10) {
      hr = `0${hr}`;
    }
    let min = now.getMinutes();
    if (min < 10) {
      min = `0${min}`;
    }
    let d = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let dt = d[now.getDay()];
    return `${dt} ${hr}:${min}`;
  }

  function handleResponse(city) {
    // e.preventDefault();
    let apiKey = "8c19a74304f5d4fc0221e14cd3fdf1e0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemp);
  }

  handleResponse("Addis Ababa");

  function showTemp(response) {
    setTemp(Math.round(response.data.main.temp));
    document.querySelector("#date-time").innerHTML = setTime(response.data.dt);
    document.querySelector("h2").innerHTML = response.data.name;
    document
      .querySelector("#icon")
      .setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      );
    document.querySelector("#wind").innerHTML = Math.round(
      response.data.wind.speed * 3.6
    );
    document.querySelector("#hum").innerHTML = Math.round(
      response.data.main.humidity
    );
    document.querySelector("#desc").innerHTML =
      response.data.weather[0].description;

    document.querySelector("#temp-deg").innerHTML = Math.round(
      response.data.main.temp
    );
  }

  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-body">
            {/* <!-- Header Section --> */}
            <div className="form">
              <form className="input-city App" onSubmit={handleResponse}>
                <input
                  type="search"
                  className="form-control shadow-sm"
                  placeholder="Enter a city"
                  id="city"
                  autofocus="on"
                  autocomplete="none"
                />
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary me-2"
                />
                <button id="current" className="btn btn-success">
                  Current Location
                </button>
              </form>
            </div>
            {/* <!-- Content area --> */}
            <div className="content">
              <h2></h2>
              <p id="date-time"></p>
              <p>
                <span id="desc"></span>
              </p>
              <h1>
                <img src="" width="80" alt="" id="icon" />
                <span id="temp-deg">{temp}</span>
                <a href="#" className="temp active" id="deg-cel">
                  °C
                </a>
                <span className="temp" id="line">
                  |
                </span>
                <a href="#" className="temp" id="deg-far">
                  °F
                </a>
              </h1>
              <div className="content right">
                <p>
                  Wind: <span id="wind"></span>KMPH
                </p>
                <p>
                  Humidity: <span id="hum"></span>%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
