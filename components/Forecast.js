import React from 'react'
import {FutureHour} from "./FutureHour";

export const Forecast = ({forecastWeatherData}) => (
    <section className="hourly-weather-container" style={{ overflowX: "scroll" }}>
        {forecastWeatherData &&
        forecastWeatherData.list &&
        forecastWeatherData.list.length > 0 &&
        forecastWeatherData.list.map((futureHourWeather) => (
            <FutureHour
                key={futureHourWeather.dt}
                weatherData={futureHourWeather}
            />
        ))}
    </section>
)