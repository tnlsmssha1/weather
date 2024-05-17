import React from 'react'
import Button from 'react-bootstrap/Button';

const WeatherButton = ({cities, selectedCity, changeCity}) => {
  return (
    <div className='weather-button'>
        <Button
        variant={`${selectedCity===""?"outline-warning":"warning"}`}
        onClick={()=>changeCity("reset")}
        >
          Current Location
        </Button>
        {cities.map((item,index)=>{
          return(
          <Button
          variant={`${selectedCity===item?"outline-warning":"warning"}`}
          key={index}
          onClick={()=>changeCity(item)}
          >{item}</Button>
        )})}
    </div>
  )
}

export default WeatherButton
