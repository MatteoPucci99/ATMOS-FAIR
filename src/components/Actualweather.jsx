import React, { useEffect, useState } from "react";
import ShowActualWeather from "./ShowActualWeather";


const Actualweather = (props) => {
  const [weatherData, setWeatherData] = useState({});
   

  const getWeatherDetails = (details) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${details[0].lat}&lon=${details[0].lon}&units=metric&lang=it&appid=af5fd8bce7d15b37aaa435f691fc2a00`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("C'è stato un errore con il caricamento");
        }
      })
      .then((data) => {
        setWeatherData(data);
        
      })
      .catch((err) => {
        console.log(err);
        
      });
  };

  const getWeatherData = () => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${props.location}&limit=1&appid=af5fd8bce7d15b37aaa435f691fc2a00`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("C'è stato un errore con il caricamento");
        }
      })
      .then((data) => {
        console.log(data);
        getWeatherDetails(data);
      })
      .catch((err) => {
        console.log(err);
        
      });
  };

  useEffect(() => {
    if (props.location !== "") {
 
      getWeatherData();
    }
  }, [props.location]);



  if (!Object.keys(weatherData).length) {
    return null;
  }

  return <ShowActualWeather data={weatherData} />;
};

export default Actualweather;
