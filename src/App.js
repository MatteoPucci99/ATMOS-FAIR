import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import Searchbar from "./components/Searchbar";
import Actualweather from "./components/Actualweather";
import Forecastweather from "./components/Forecastweather";
import { useState } from "react";
import "./style/style.css";
import logo from "./img/logo2.png";

function App() {
  const [weatherLocation, setWeatherLocation] = useState("");

  const findLocation = (location) => setWeatherLocation(location);

  return (
    <Container>
      <div className="text-center mt-3 d-flex justify-content-center">
        <img src={logo} alt="logo" />
        <h3 className="mb-0 ms-2 d-flex align-items-center">EPI-WEATHER</h3>
      </div>
      <Row className="justify-content-center">
        <Col xs={10} md={10} lg={6} className="p-0 rounded-4">
          <Searchbar
            findLocation={findLocation}
            weatherLocation={weatherLocation}
          />
          <Row className="row-cols-1">
            <Col className="rounded-5">
              <Actualweather location={weatherLocation} />
            </Col>
            <Col>
              <Forecastweather location={weatherLocation} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
