import { useEffect, useState } from 'react';
import Map from './component/Map.js';
import WeatherBox from './component/WeatherBox.js';
import WeatherButton from './component/WeatherButton.js';
import ClipLoader from "react-spinners/ClipLoader";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';



function App() {
  const [weather, setWeather]=useState(null);
  const [city,setCity]=useState("")
  const [loading,setLoading]=useState(false)
  const cities=['busan','sokcho','haenam','seoul','incheon']

  const getCurrentLocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat=position.coords.latitude; // 위도
      let lon=position.coords.longitude; // 경도
      getWeatherByCurrentLocation(lat,lon)
    });
  };

  const getWeatherByCurrentLocation=async(lat,lon)=>{
    let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c60a6afa5d1b5a1eb609ca94b3485160&units=metric`;
    setLoading(true);
    let response = await fetch(url)
    let data=await response.json();
    setWeather(data);
    setLoading(false);
  };

  const getWeatherByCity=async()=>{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c60a6afa5d1b5a1eb609ca94b3485160&units=metric`
    setLoading(true)
    let response=await fetch(url)
    let data=await response.json();
    setWeather(data)
    setLoading(false)
  }

  const changeCity=(city)=>{
    if(city==="reset"){
      setCity("")
    }else{
      setCity(city)
    }
  }

  useEffect(()=>{
    if(city===""){
      getCurrentLocation();
    }else{
      getWeatherByCity();
    }
  },[city])

  return (
    <div>
        {loading?(
            <div className='container'>
              <ClipLoader
              color='#f88c6b'
              loading={loading}
              size={100}/>
            </div>
          ):(
            <div className='container'>
              <WeatherBox weather={weather} />
              <WeatherButton cities={cities} selectedCity={city} changeCity={changeCity}/>
              {/* <Map/> */}
            </div>
          )
        }
    </div>
  );
}

export default App;
