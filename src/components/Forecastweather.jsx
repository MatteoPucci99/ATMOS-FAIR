
import { useEffect, useState } from "react"
import ShowForecastWeather from "./ShowForecastWeather"


const Forecastweather = (props)=>{
    const [forecastData,setForecastData] = useState({})
    
    const getForecastDetails = (details)=>{
        fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${details[0].lat}&lon=${details[0].lon}&appid=af5fd8bce7d15b37aaa435f691fc2a00`)
        .then(res=>{
            if(res.ok){
                return res.json()
            } else {
                throw new Error ("C'è stato un errore con il caricamento")
            }
        })
        .then(data=>{
            setForecastData(data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const getForecastData = ()=>{
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${props.location}&limit=1&appid=af5fd8bce7d15b37aaa435f691fc2a00`)
        .then(res=>{
            if(res.ok){
                return res.json()
            } else {
                throw new Error ("C'è stato un errore con il caricamento")
            }
        })
        .then(data=>{
            console.log(data)
            getForecastDetails(data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        if(props.location !== ''){
            getForecastData()

        }
    }, [props.location])

    return (
        <ShowForecastWeather data={forecastData}/>
    )

}

export default Forecastweather