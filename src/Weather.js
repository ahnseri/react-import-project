import React from "react";
import SearchForm from "./SearchForm";
import SearchButtons from "./SearchButtons";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Toronto",
    date: "Sun., October 4 | 12:10 PM",
    description: "Light rain showers",
    imgUrl: "https://openweathermap.org/img/wn/09d@2x.png",
    tempFeel: "8",
    humidity: "90",
    wind: "10",
  };

  return (
    <div className="Weather">
      <div className="card">
        <div className="card-body">
          <div className="card-header">{weatherData.date}</div>

          <section className="loadWeather">
            <div className="row justify-content-center">
              <div className="col-auto">
                <img src={weatherData.imgUrl} alt={weatherData.description} />
                <br />
                <span className="city">{weatherData.city}</span>
              </div>
            </div>

            <div className="row justify-content-around">
              <div className="col-6">
                <div className="float-left">
                  <span className="temperature">9</span>
                  <span className="units">°C</span>
                  <br />
                  <span className="description">{weatherData.description}</span>
                </div>
              </div>
              <div className="col-auto mr-ml-auto">
                <span className="weatherDetails">
                  <ul>
                    <li>
                      <i class="fas fa-thermometer-half" /> Feels like:{" "}
                      {weatherData.tempFeel}°C
                    </li>
                    <li>
                      <i class="fas fa-tint" /> Humidity: {weatherData.humidity}
                      %
                    </li>
                    <li>
                      <i class="fas fa-wind" /> Wind: {weatherData.wind} km/h
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </section>

          <section className="searchForm">
            <span className="errorMsg" />
            <form>
              <div className="form-row">
                <div className="col">
                  <SearchForm />
                </div>
                <div className="col-auto">
                  <SearchButtons />
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
