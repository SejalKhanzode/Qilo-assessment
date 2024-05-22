import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import Chart from "chart.js/auto";
import "tailwindcss/tailwind.css";

const api = {
  key: "da48e2c493d2681071063271b26af68a",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
  
    const searchPressed = () => {
      fetch(`${api.base}forecast?q=${search}&units=metric&cnt=7&appid=${api.key}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("City not found");
          }
          return res.json();
        })
        .then((result) => {
          setWeather(result);
          setError(null);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setError("City not found");
        });
    };

  useEffect(() => {
    if (weather) {
      createTemperatureChart(weather);
    }
  }, [weather]);

  const createTemperatureChart = (weatherData) => {
    const ctx = document.getElementById("temperatureChart");

    const temperatures = weatherData.list.map((item) => item.main.temp);
    const colors = [
      "rgba(26, 32, 44, 0.7)",
      "rgba(84, 90, 110, 0.7)",
      "rgba(116, 144, 175, 0.7)",
      "rgba(155, 183, 206, 0.7)",
      "rgba(193, 221, 232, 0.7)",
      "rgba(212, 233, 244, 0.7)",
      "rgba(223, 242, 248, 0.7)"
    ];

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
        datasets: [
          {
            label: "Temperature (°C)",
            data: temperatures,
            backgroundColor: colors,
            borderColor: colors.map(color => color.replace("0.7", "1")),
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: "rgba(255, 255, 255, 0)" // Transparent grid lines
            },
            ticks: {
              color: "var(--colorLight1)",
              callback: function(value, index, values) {
                return value + '°C';
              }
            }
          },
          x: {
            grid: {
              color: "rgba(255, 255, 255, 0)" // Transparent grid lines
            },
            ticks: {
              color: "var(--colorLight1)",
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      },
    });
  };

  return (
    <div className="wrapper">
      <header>
        <div className="tab-container">
          <p className="tab" data-searchWeather>
          SEARCH TEMPERATURE OF WEEK
          </p>
        </div>

        <div className="form-container">
          <input
            type="search"
            placeholder="Search for City..."
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <button onClick={searchPressed} className="btn">
            <BsSearch />
          </button>
        </div>

        {error && <p className="error">{error}</p>}

        {weather && (
  <div className="w-1/2 mx-auto flex justify-center items-center">
    <canvas id="temperatureChart" className="chart pt-20"></canvas>
  </div>
)}

      </header>
    </div>
  );
}

export default Weather;