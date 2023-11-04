import { Container, Row, Col } from "react-bootstrap"

const ShowActualWeather = (props)=>{

   console.log(props.data)

    return (
    <Container className="text-white fw-bold">
        <Row className="row-cols-1 text-center">
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
                {props.data.weather[0].main}
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