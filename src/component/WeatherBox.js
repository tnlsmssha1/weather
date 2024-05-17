import React from 'react'

const WeatherBox = ({weather}) => {
    console.log(weather)
  return (
    <div className='weather-box'>
        <h1>{weather?.name}</h1>
        <h2>{weather?.main.temp}C / {Math.round((weather?.main.temp)*1.8+32)}F</h2>
        <h3>{weather?.weather[0].description}</h3>
        <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt='X'/>
    </div>
  )
}

export default WeatherBox