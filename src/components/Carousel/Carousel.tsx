import Carousel from 'react-bootstrap/Carousel';


const Carrusel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='d-block w-100' style={{maxHeight: "500px", objectFit: 'cover'}} src="/assets/img/slide1.jpg" alt="Imágen tecnologica" />
      </Carousel.Item>
      
      <Carousel.Item>
      <img className='d-block w-100' style={{maxHeight: "500px", objectFit: 'cover'}} src="/assets/img/slide2.jpg" alt="Imágen de tecnologias" />
      </Carousel.Item>

      <Carousel.Item>
      <img className='d-block w-100' style={{maxHeight: "500px", objectFit: 'cover'}} src="/assets/img/slide3.jpg" alt="Imágen de trabajo en equipo" />
      </Carousel.Item>
    </Carousel>
  )
}

export default Carrusel