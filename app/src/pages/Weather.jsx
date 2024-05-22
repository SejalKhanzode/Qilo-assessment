import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./weather.css";
import humidity from "../assets/icons/humidity.png"
import rain from "../assets/icons/rain.png"
import temp from "../assets/icons/sun.png"
import temp2 from "../assets/icons/sun2.png"


const api = {
  key: "da48e2c493d2681071063271b26af68a",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);

  const searchPressed = () => {
    fetch(`${api.base}forecast?q=${search}&units=metric&cnt=7&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="wrapper">
      <header className="App-header">

        <div className="tab-container">
          <p className="tab" data-searchWeather>
            SEARCH WEATHER FORECAST OF WEEK
          </p>
        </div>

        <div className="form-container">
          <input
            type="search"
            placeholder="Search for City..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed} className="btn">
            <BsSearch />
          </button>
        </div>

        {weather && (
          <div className="parameter-container ">
            <div className="parameter ml-20">
            <img src={temp} alt="temp"/>
              <h2>Average Temperature</h2>
              <p>
                {(
                  weather.list.reduce((acc, item) => acc + item.main.temp, 0) /
                  weather.list.length
                ).toFixed(2)}{" "}
                °C
              </p>
            </div>

            <div className="parameter">
            <img src={rain} alt="rain" />
              <h2> Average Rainfall  </h2>
              <p className="">
                {(
                  weather.list.reduce(
                    (acc, item) => acc + (item.rain ? item.rain["3h"] || 0 : 0),
                    0
                  ) / weather.list.length
                ).toFixed(2)}{" "}
                mm
              </p>
            </div>

            <div className="parameter">
            <img src={humidity} alt="humidity"/>
              <h2>Average Humidity </h2>
              <p>
                {(
                  weather.list.reduce((acc, item) => acc + item.main.humidity, 0) /
                  weather.list.length
                ).toFixed(2)}{" "}
                %
              </p>
            </div>

            <div className="parameter">
            <img src={temp2} alt="temp2"/>
              <h2>Current Temperature</h2>
              <p>{weather.list[0].main.temp.toFixed(2)} °C</p>
            </div>
          </div>
        )}
      </header>
    
    </div>
  );
}

export default Weather;
