import React from "react";
import axios from "axios";
// import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`Weather in ${response.data.name} is ${response.data.main.temp}°`);
  }
  let apiKey = "8c19a74304f5d4fc0221e14cd3fdf1e0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    // <Bars
    //   height="80"
    //   width="80"
    //   color="#4fa94d"
    //   ariaLabel="bars-loading"
    //   wrapperStyle={{}}
    //   wrapperClass=""
    //   visible={true}
    // />
    <h1>Hello from Weather</h1>
  );
}
