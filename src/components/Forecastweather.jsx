
import { useEffect, useState } from "react"
import ShowForecastWeather from "./ShowForecastWeather"


const Forecastweather = (props)=>{
    const [forecastData,setForecastData] = useState({})

    //Funzione per ricevere tutti i dettagli del meteo della località desiderata. Questi dati verranno salvati nello stato e passati come prop al componente ShowForecastWeather
    const getForecastDetails = (details)=>{
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${details[0].lat}&lon=${details[0].lon}&units=metric&appid=af5fd8bce7d15b37aaa435f691fc2a00`)
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
    //Funzione per ricevere i dati di latitudine e longitudine della località cercata. Questi dati verranno passati alla funzione getForecastDetails che viene chiamata in caso di successo della fetch.
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

    
    if (!Object.keys(forecastData).length) {
        return null; 
      }

    return (
        <ShowForecastWeather data={forecastData}/>
    )

}

export default Forecastweather