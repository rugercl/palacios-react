import { Container } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel'

const HomeContainer = ({greeting}) => {
    // src={require(`../asset/img/${prod.pictureUrl}.jpg`).default}
    // "../../src/asset/img/portada1.jpg/800x400?text=First slide&bg=373940"
    return (
        // <Container>
            <Carousel>
            <h1 className="text-center mt-5 pt-4">{greeting}</h1>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require(`../asset/img/portada1.jpg`).default} width="800" height="400"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require(`../asset/img/portada2.jpg`).default} width="800" height="400"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require(`../asset/img/portada3.jpg`).default} width="800" height="400"
                    alt="Third slide"
                    />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        // </Container>

    )
}
export default HomeContainer;