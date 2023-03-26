import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Col,Container, Row} from 'react-bootstrap';

const Banner = () => {
  return ( 
    <section id="home">
    <Container fluid >
        <Row className='justify-content-center align-item-center'> 
            <Col lg={8}>
            <Carousel>
      <Carousel.Item interval={2000} >
        <img
          className="d-block w-100"
          src={require('../assets/MR3_1223x551.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Margherita</h3>
          <p className='d-none d-sm-block'>
          Regular Margherita + Regular Moroccan Spice Pasta Pizza Veg + Regular Achari Do Pyaza +Regular Corn n Cheese.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={require('../assets/Micro.png')}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Pepperoni</h3>
          <p className='d-none d-sm-block'>
          Delightful combination of onion, capsicum, tomato & grilled mushroom</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={require('../assets/Home.jpg')}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Hawaiian</h3>
          <p className='d-none d-sm-block'>
          A crazy fusion like never before. A delicious fusion of corn stuffed paratha and cheesy pizza..
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


            </Col>


        </Row>
    <div className='text-center'>
      <h2 className='dispaly-5 mt-3'>Pizza For Every Occasion</h2>
      <p className='.lead.text.muted'>YOUR CART IS EMPTY
 Please add some items from the menu.</p>

      </div>
    </Container>
    </section>
  )
}

export default Banner;