import { Container, Row, Col } from "react-bootstrap"
import clear1 from '../img/weather_icons/01d.png'
import clear2 from '../img/weather_icons/01n.png'
import fclouds from '../img/weather_icons/02d.png'
import fclouds2 from '../img/weather_icons/02n.png'
import clouds from '../img/weather_icons/03d.png'
import cloudsLG from '../img/weather_icons/04d.png'
import rain from '../img/weather_icons/09d.png'
import Rain from '../img/weather_icons/10d.png'
import thunder from '../img/weather_icons/11d.png'
import snow from '../img/weather_icons/13d.png'
import mist from '../img/weather_icons/50d.png'







const ShowActualWeather = (props)=>{

   console.log(props.data)
   const currentHour = new Date().getHours()

    return (
    <Container >
        <Row  id="showActualWeather" className="row-cols-1 text-center rounded-4">
            <Col className= "px-3">
            <div>
            <h3 className="mt-2">
            {props.data.name}
            </h3>
            </div> 
            </Col>
            <Col>
            <div className="display-4 mt-3"> 
            {Math.floor(props.data.main.temp)}°
            </div>
            <div className="mt-1">
            {
              (() => {
                switch (props.data.weather[0].description) {
                  case 'cielo sereno':
                    return <img src={currentHour >= 18 ? clear2 : clear1} alt="clear" />;
                  case 'poche nuvole':
                    return <img src={currentHour >= 18 ? fclouds2 : fclouds} alt='clouds'/>;
                  case 'nubi sparse':
                    return <img src={clouds} alt='clouds'/>;   
                  case 'nuvole spezzate':
                    return <img src={cloudsLG} alt='clouds'/>; 
                  case 'doccia a pioggia':
                    return <img src={rain} alt='rain'/>;   
                  case 'piovere':
                    return <img src={Rain} alt='rain'/>;
                  case 'temporale':
                    return <img src={thunder} alt='thunder'/>;
                  case 'nevicare':
                    return <img src={snow} alt='snow'/>;        
                  case 'nebbia':
                    return <img src={mist} alt='mist'/>;     
                   
                  
                  default:
                    return null; 
                }
              })()
            }
            </div>
            </Col>
            <Col className="mt-3 px-5">
            <div className="d-flex justify-content-center pb-2">

                <div className="me-3">
                    MAX: {Math.floor(props.data.main.temp_max)}°
                </div>
                <div>
                    MIN: {Math.floor(props.data.main.temp_min)}°
                </div>

            </div>
            <div className="my-3">
                <div>Umidità: {props.data.main.humidity}%</div>
                <div>Pressione atmosferica: {props.data.main.pressure}hPA</div>
                <div>Vento: {props.data.wind.speed}m/s</div>
            </div>
            </Col>
        </Row>
    </Container>
    )
}

export default ShowActualWeather