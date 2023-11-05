import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import clear1 from '../img/weather_icons/01d.png';
import fclouds from '../img/weather_icons/02d.png';
import clouds from '../img/weather_icons/03d.png';
import cloudsLG from '../img/weather_icons/04d.png';
import rain from '../img/weather_icons/09d.png';
import Rain from '../img/weather_icons/10d.png';
import thunder from '../img/weather_icons/11d.png';
import snow from '../img/weather_icons/13d.png';
import mist from '../img/weather_icons/50d.png';

const weatherIcons = {
  'clear sky': clear1,
  'few clouds': fclouds,
  'scattered clouds': clouds,
  'overcast clouds': clouds,
  'broken clouds': cloudsLG,
  'drizzle': rain,
  'light intensity drizzle': rain,
  'heavy intensity drizzle': rain,
  'light intensity drizzle rain': rain,
  'drizzle rain': rain,
  'heavy intensity drizzle rain': rain,
  'shower rain and drizzle': rain,
  'heavy shower rain and drizzle': rain,
  'shower drizzle': rain,
  'shower': Rain,
  'light rain': Rain,
  'moderate rain': Rain,
  'heavy intensity rain': Rain,
  'very heavy rain': Rain,
  'extreme rain': Rain,
  'freezing rain': Rain,
  'light intensity shower rain': Rain,
  'heavy intensity shower rain': Rain,
  'ragged shower rain': Rain,
  'thunderstorm with light rain': thunder,
  'thunderstorm with rain': thunder,
  'thunderstorm with heavy rain': thunder,
  'light thunderstorm': thunder,
  'thunderstorm': thunder,
  'heavy thunderstorm': thunder,
  'ragged thunderstorm': thunder,
  'thunderstorm with light drizzle': thunder,
  'thunderstorm with drizzle': thunder,
  'thunderstorm with heavy drizzle': thunder,
  'snow': snow,
  'light snow': snow,
  'heavy snow': snow,
  'sleet': snow,
  'light shower sleet': snow,
  'light rain and snow': snow,
  'rain and snow': snow,
  'light shower snow': snow,
  'shower snow': snow,
  'heavy shower snow': snow,
  'shower sleet': snow,
  'mist': mist,
  'squalls': mist,
  'smoke': mist,
  'haze': mist,
  'sand/dust whirls': mist,
  'fog': mist,
  'sand': mist,
  'dust': mist,
  'volcanic ash': mist,
  'tornado': mist,
};

const ShowForecastWeather = (props) => {
  const formatDate = (string) => {
    const settings = { day: 'numeric', month: 'short', weekday: 'short' };
    const dateTime = new Date(string);
    return dateTime.toLocaleDateString('it-IT', settings);
  };

  const handleWeatherIcon = (description) => {
    return weatherIcons[description] || null;
  };

  const renderForecastRows = () => {
    const indices = [6, 13, 21, 29, 39];

    return indices.map((index) => (
      <Row className="mt-3" key={index}>
        <Col className="d-flex align-items-center justify-content-center">
          <img src={handleWeatherIcon(props.data.list[index].weather[0].description)} alt="weather" width={35} />
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          {Math.floor(props.data.list[index].main.temp)}°
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          {formatDate(props.data.list[index].dt_txt)}
        </Col>
      </Row>
    ));
  };

  return (
    <Container className="rounded-4 mt-3" id="showForecast">
      <Row className="row-cols-1 text-center py-2">
        <Col className="px-3">
          <div className="fs-3">Previsioni per 5 giorni</div>
        </Col>
        <Col className="d-flex flex-column justify-content-between">
          {renderForecastRows()}
        </Col>
      </Row>
    </Container>
  );
};

export default ShowForecastWeather;
