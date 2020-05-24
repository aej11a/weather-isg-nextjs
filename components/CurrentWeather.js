import React from 'react'
import {getTimeFromDate} from "../utils/getTimeFromDate";
import {ArrowDownCircle, ArrowUpCircle, Smile, Sunrise, Sunset, Thermometer, Wind} from "react-feather";

export const CurrentWeather = ({currentWeatherData}) => (
    <section className="current-weather-data">
        <br/>
        <h2 className="Weather-location">{currentWeatherData.name}</h2>
        <div className="Weather-current">
            <h3>Current Weather</h3>
            <img
                src={`https://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}.png`}
                alt="weather icon"
            />
            <br />
            <span className={"weather-desc"}>{currentWeatherData.weather[0].description}</span>
            <br />
            <br />
            <div>
                <Thermometer />
                {currentWeatherData.main.temp}&deg;F
                <br />
                <Smile /> Feels like {currentWeatherData.main.feels_like}&deg;F
                <br />
                <ArrowUpCircle /> {currentWeatherData.main.temp_max}&deg;F |{" "}
                <ArrowDownCircle /> {currentWeatherData.main.temp_min}&deg;F
            </div>
            <div>
                <Wind />
                <div style={{ display: "inline", marginTop: "-5" }}>
                    {currentWeatherData.wind.speed}mph at {currentWeatherData.wind.deg}
                    &deg;
                </div>
            </div>
            <div>
                <Sunrise /> {getTimeFromDate(currentWeatherData.sys.sunrise)}
            </div>
            <div>
                <Sunset /> {getTimeFromDate(currentWeatherData.sys.sunset)}
            </div>
        </div>
    </section>
)