import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import "./item.css";

const HomeContainer = ({greeting}) => {
    return (
        <div className="texth3">
            <h1 className="text-center mt-5 pt-4">{greeting}</h1>
        
        <div className="homecontainer">
            
            
            <Carousel showThumbs={false} width={960}>
                    <div className="carousel">
                        <img src={require(`../asset/img/portada1.jpg`).default} width="800" height="400" alt="" />
                        <p className="legend">El té es una de las bebidas más antiguas del mundo.</p>
                    </div>
                    <div>
                        <img src={require(`../asset/img/portada2.jpg`).default} width="800" height="400" alt="" />
                        <p className="legend">Según cuenta la leyenda china, el té surgió de la mano del emperador Shen-Nung.</p>
                    </div>
                    <div>
                    <img src={require(`../asset/img/portada3.jpg`).default} width="800" height="400" alt="" />
                    <p className="legend">En todo el mundo el té es la bebida más consumida, por encima del café, de la cerveza o la coca-cola.</p>
                    </div>
            </Carousel>
        </div>
        </div>

    )
}
export default HomeContainer;