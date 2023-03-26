import React, { useState } from 'react';
import { Container ,Row ,Col} from 'react-bootstrap';
import PizzaCard from './Pizzacard';

const Menu = () => {
    const[menu]=useState([1,2,3,4,5,6])
  return (
   <section id ='Menu' className='bg-light'>
    <Container>
        <div className='text-center'>
        <h3 className='text-primary  my-3 py-5' >Treat Yourself with our Everyday Menu <i className='bi bi-tiktok'></i></h3>
        </div>
        <Row>
            {
                menu.map((item)=>{
                    return <Col md={6} lg={4}  key={item}>
                    <PizzaCard/>
                   </Col>
                })
            }
           

        </Row>

    </Container>






   </section>
  )
}

export default Menu 