import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Searchbar from "./components/Searchbar";
import Actualweather from "./components/Actualweather";
import Forecastweather from "./components/Forecastweather";
import { useState } from "react";
import "./style/style.css";
import logo from "./img/logo2.png";
import Notfound from "./components/Notfound";
import { motion } from "framer-motion";

function App() {
  const [weatherLocation, setWeatherLocation] = useState("Massa");

  const findLocation = (location) => setWeatherLocation(location);

  return (
    <Container>
      <div className="text-center mt-3 d-flex justify-content-center">
        <img src={logo} alt="logo" />
        <h3 className="mb-0 ms-2 d-flex align-items-center">ATMOS-FAIR</h3>
      </div>
      <Row className="justify-content-center">
        <Col xs={10} md={10} lg={6} className="p-0 rounded-4">
          <Searchbar
            findLocation={findLocation}
            weatherLocation={weatherLocation}
          />
          {weatherLocation === "" ? (
            <motion.div
              key={weatherLocation}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.2 }}
            >
              <Notfound />
            </motion.div>
          ) : (
            <Row className="row-cols-1">
              <motion.div
                key={weatherLocation}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.2 }}
              >
                <Col className="rounded-5 d-flex justify-content-center">
                  <Actualweather location={weatherLocation} />
                </Col>
              </motion.div>
              <Col>
                <motion.div
                  key={weatherLocation}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.2 }}
                >
                  <Forecastweather location={weatherLocation} />
                </motion.div>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
