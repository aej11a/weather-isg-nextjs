import React from "react";
import { useRouter } from 'next/router';
import Head from 'next/head'
import {Header} from "../../components/Header";
const format = require('date-format');
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

    const weatherFetch = await fetch(`${process.env.API_BASE}/api/getWeather/${zip}`)
    const {currentWeatherData, forecastWeatherData} = await weatherFetch.json()

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
                <Head>
                    <title>Weather for {zip}</title>
                </Head>
                <Header linking/>
                <br/>
                <CurrentWeather currentWeatherData={currentWeatherData}/>
                <Forecast forecastWeatherData={forecastWeatherData}/>
                <br/>
                <footer>
                    <br/>
                    Generated {dateGenerated} UTC
                    <br/>
                    Site by <a href="https://github.com/aej11a">Andrew Jones</a>
                    <br/>
                    Powered by <a href="https://nextjs.org/">NextJS by Vercel</a>
                </footer>
            </div>
        )
    }
}