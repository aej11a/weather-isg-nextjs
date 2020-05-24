import { useRouter } from 'next/router';
import React from "react";
import {Header} from "../../components/Header";
import {getTimeFromDate} from "../../utils/getTimeFromDate";
const format = require('date-format');
import {
    Wind,
    Sunset,
    Sunrise,
    Thermometer,
    ArrowDownCircle,
    ArrowUpCircle,
    Smile,
} from "react-feather";
import {CurrentWeather} from "../../components/CurrentWeather";
import {Forecast} from "../../components/Forecast";
export async function getStaticPaths() {
    return { paths: [], fallback: true };
}

export async function getStaticProps({ params }) {
    const {zip} = params;

    if(zip.length !== 5) return {
        props: {
            error: "Wrong Zip Code"
        }
    }

    const countryCode = 'us'
    const currentWeatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zip},${countryCode}&appid=${process.env.WEATHER_API_KEY}&units=imperial`
    )
    const currentWeatherData = await currentWeatherRes.json()

    const forecastWeatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?zip=${zip},${countryCode}&appid=${process.env.WEATHER_API_KEY}&units=imperial`
    )
    const forecastWeatherData = await forecastWeatherRes.json()

    return {
        props: {
            zip,
            currentWeatherData,
            forecastWeatherData,
            dateGenerated: format('MM/dd/yyyy hh:mm:ss', new Date())
        },
        unstable_revalidate: 60
    }
}

export default function Weather({zip, currentWeatherData, forecastWeatherData, dateGenerated, error}) {
    const { isFallback } = useRouter();
    if(isFallback){
        return (
            <div className="page">
                <Header/>
                <p>Loading...</p>
            </div>
        )
    }
    else if(error && error.length > 0){
        return (
            <div className="page">
                <Header/>
                <p>{error}</p>
            </div>
        )
    }
    else {
        return (
            <div className="page">
                <Header linking/>
                <br/>
                <CurrentWeather currentWeatherData={currentWeatherData}/>
                <Forecast forecastWeatherData={forecastWeatherData}/>
                <br/>
                <footer>
                    <br/>
                    Generated {dateGenerated} UTC
                    <br/>
                    Site by <a href="https://twitter.com/ajones_codes">Andrew Jones</a>
                    <br/>
                    Powered by <a href="https://nextjs.org/">NextJS by Vercel</a>
                </footer>
            </div>
        )
    }
}