export default async (req, res) => {
    const {
        query: { zip },
    } = req

    const countryCode = 'us'
    const currentWeatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zip},${countryCode}&appid=${process.env.WEATHER_API_KEY}&units=imperial`
    )
    const currentWeatherData = await currentWeatherRes.json()

    const forecastWeatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?zip=${zip},${countryCode}&appid=${process.env.WEATHER_API_KEY}&units=imperial`
    )
    const forecastWeatherData = await forecastWeatherRes.json()

    res.status(200).json({
        currentWeatherData,
        forecastWeatherData
    })
}