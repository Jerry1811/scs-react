import Carousel from 'react-bootstrap/Carousel'

const HeroSection = () => {
  return (
    <>
      <Carousel fade style={{ marginTop: 'auto' }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/200/300?random=1"
            alt="First slide"
            style={{ width: '100px', height: '500px' }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/200/300?random=1"
            alt="Second slide"
            style={{ width: '100px', height: '500px' }}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/200/300?random=1"
            alt="Third slide"
            style={{ width: '100px', height: '500px' }}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default HeroSection
