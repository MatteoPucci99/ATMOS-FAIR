import { Container, Row, Col } from "react-bootstrap"


const ShowForecastWeather = ()=>{
    return(
    <Container className="border rounded-4 mt-3">
        <Row className="row-cols-1 text-center">
            <Col className= "px-3">
                <div className="border-bottom">
                Forecast weather
                </div> 
            </Col>
            <Col>
                Non saprei come riempire i dati perchè non riesco ad accedere alla get
            </Col>
        </Row>
    </Container>
    )
}

export default ShowForecastWeather