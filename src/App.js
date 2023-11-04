import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import Searchbar from "./components/Searchbar";
import Actualweather from "./components/Actualweather";
import Forecastweather from "./components/Forecastweather";
import { useState } from "react";
import "./style/style.css";

function App() {
  const [weatherLocation, setWeatherLocation] = useState("");

  const findLocation = (location) => setWeatherLocation(location);

  return (
    <Container id="container">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={6} className="p-0 rounded-4" id="mainContent">
          <div className="p-4 rounded-4" id="mainCol">
            <Searchbar
              findLocation={findLocation}
              weatherLocation={weatherLocation}
            />
            <Row className="row-cols-1">
              {/* In className della row ci sarebbe stato un "row-cols-lg-2 per gestire lo spazio" */}
              {/* se il componente Forecastweather funzionasse */}
              <Col id="secondContent" className="rounded-5">
                <Actualweather location={weatherLocation} />
              </Col>
              <Col>
                {/* Non capisco come mai il risultato della fetch mi dia un error 401. */}
                {/* Perciò non riesco ad andare avanti con questo componente :( ) */}

                {/* <Forecastweather location={weatherLocation} /> */}
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
