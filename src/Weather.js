import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

export default function Weather() {
  const [city, setCity] = useState("Addis Ababa");

  useEffect(() => {
    handleResponse();
  }, [city]);

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

  function handleResponse() {
    let apiKey = "b4d8b9ad60f6t00838ba39200o473c14";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemp);
  }

  function showTemp(response) {
    console.log(response);
    document.querySelector("#date-time").innerHTML = setTime(
      response.data.time
    );
    document.querySelector("h2").innerHTML = response.data.city;
    document
      .querySelector("#icon")
      .setAttribute(
        "src",
        ` http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
      );
    document.querySelector("#wind").innerHTML = Math.round(
      response.data.wind.speed * 3.6
    );
    document.querySelector("#hum").innerHTML = Math.round(
      response.data.temperature.humidity
    );
    document.querySelector("#desc").innerHTML =
      response.data.condition.description;

    document.querySelector("#temp-deg").innerHTML = Math.round(
      response.data.temperature.current
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    const inputCity = document.querySelector("#city").value;
    setCity(inputCity);
  }

  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-body">
            {/* <!-- Header Section --> */}
            <div className="form">
              <form className="input-city App" onSubmit={handleSubmit}>
                <input
                  type="search"
                  className="form-control shadow-sm"
                  placeholder="Enter a city"
                  id="city"
                  autoFocus={true}
                  autoComplete="none"
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
              <h2>Weather Information</h2>
              <p id="date-time"></p>
              <p>
                <span id="desc"></span>
              </p>
              <h1>
                <img src="" width="80" alt="" id="icon" />
                <span id="temp-deg"></span>
                <a href="/" className="temp active" id="deg-cel">
                  °C
                </a>
                <span className="temp" id="line">
                  |
                </span>
                <a href="/" className="temp" id="deg-far">
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
