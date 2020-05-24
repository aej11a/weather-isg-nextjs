import React from "react";
import PropTypes from "prop-types";
import { getPrettyDayOfMonth, getPrettyTime } from "../utils/getTimeFromDate";

export const FutureHour = (props) => {
    if (
        props.weatherData &&
        props.weatherData.weather &&
        props.weatherData.weather[0]
    ) {
        const weatherInfo = props.weatherData.weather[0];
        return (
            <div className="hourly-weather">
                <h2>{props.weatherData.name}</h2>
                <h3>{getPrettyDayOfMonth(props.weatherData.dt)}</h3>
                <h3>{getPrettyTime(props.weatherData.dt)}</h3>
                <img
                    src={`https://openweathermap.org/img/wn/${weatherInfo.icon}.png`}
                    alt="weather icon"
                />
                <br/>
                <span className={"weather-desc"}>{weatherInfo.description}</span>
                <br />
                <div>
                    {props.weatherData.main.temp}&deg;F
                    <br />
                    Feels like {props.weatherData.main.feels_like}&deg;F
                    <br />
                    {props.weatherData.main.temp_max}&deg;F |{" "}
                    {props.weatherData.main.temp_min}&deg;F
                </div>
                <div>
                    <div style={{ display: "inline", marginTop: "-5" }}>
                        {props.weatherData.wind.speed}mph at {props.weatherData.wind.deg}
                        &deg;
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

FutureHour.propTypes = {
    weatherData: PropTypes.object,
};
