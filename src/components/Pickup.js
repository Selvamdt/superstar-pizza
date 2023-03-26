import React ,{useState}from 'react';
import { Col, Container, Row,Image, Button } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const Pickup = () => {
    const [show, setShow] = useState(false);
  return (
   <section id="Musttry" className='my-3'>

    <div className='text-center my-2  py-3'>
   <h4 className='display-4 text-primary text-left  '  > <i class="bi bi-search-heart-fill"></i> Pick of the Week</h4>
    </div>
    <Container>
        <Row className='align-items-center'>
            <Col  md={7}>
                <Image src={require('../assets/Pizza.jpg')} fluid={true} alt='pizza'></Image>
            </Col>
            <Col md={5}>
                <div className='p-3'>
                  
                    <h2 className='h1'>Chicken Keema Paratha Pizza</h2>
                    <p className=' lead text-muted'>11-Oct-2012 — Domino's first logo was designed in 1965. It was a square-shaped emblem that featured two domino pieces the red one with three dots and the blue .</p>
                    <Button variant='primary'  onClick={()=>setShow(true)}><i class="bi bi-cart-fill"></i>BuyNow</Button>
                </div>
            </Col>
        </Row> 
        <ToastContainer className="position-fixed bootom-0 end-0 p-3" position='bottom-end'>
          <Toast onClose={()=>setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Added!</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>item added to cart.</Toast.Body>
          </Toast>
        </ToastContainer>


    </Container>

   </section>
  )
}

export default Pickup;