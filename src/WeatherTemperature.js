import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(e) {
    e.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(e) {
    e.preventDefault();
    setUnit("celsius");
  }

  function convertFahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  return (
    <span>
      <span id="temp-deg">
        {unit === "celsius" ? props.celsius : convertFahrenheit()}
      </span>
      <span className="unit">
        <a
          href="/"
          className={`temp ${unit === "celsius" ? "active" : ""}`}
          id="deg-cel"
          onClick={showCelsius}>
          °C
        </a>
        {"  "}
        <span id="line">|</span>{" "}
        <a
          href="/"
          className={`temp ${unit === "fahrenheit" ? "active" : ""}`}
          id="deg-far"
          onClick={showFahrenheit}>
          °F
        </a>
      </span>
    </span>
  );
}
