

import React from "react";
import { Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import './Style.css';


const Prod = () => {
    return ( 
        <section id="BESTSELLERS">
        <div className="product" >
            <div className="container-fluid">
                <h4 className="heading text-left">BestSellers</h4>
                <Row className="pro">
                    <Col md={6} lg={3}>
                        <Card className="m-3">
                            <Card.Img variant="top" src={require("../best/11.jpg")} />
                            <Card.Body className="text-center">
                                <Card.Title>Margherita</Card.Title>
                                <span><b>₹.239</b></span>
                                <p>Classic delight with 100% real mozzarella cheese</p>
                                <Button>ADD TO Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={3}>
                        <Card className="m-3">
                            <Card.Img variant="top" src={require("../best/12.jpg")} />
                            <Card.Body className="text-center">
                                <Card.Title>Farmhouse</Card.Title>
                                <span><b>₹.459</b></span>
                                <p>Delightful combination of onion, capsicum, tomato & grilled mushroom</p>
                              
                                <Button variant="primary" href="#home">ADD TO Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={3}>
                        <Card className="m-3">
                            <Card.Img variant="top" src={require("../best/13.jpg")} />
                            <Card.Body className="text-center">
                                <Card.Title>Veg Extravaganza</Card.Title>
                                <span><b>₹.549</b></span>
                                <p>Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese</p>
                               
                                <Button variant="primary" href="#home">ADD TO CART</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={3}>
                        <Card className="m-3">
                            <Card.Img variant="top" src={require("../best/new.jpg")} />
                            <Card.Body className="text-center">
                                <Card.Title>Chicken Sausage</Card.Title>
                                <span><b>₹.369</b></span>
                                <p>American classic! Spicy, herbed chicken sausage on pizz</p>
                               
                                <Button className="btn" variant="primary" href="#home">ADD TO CART</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={3}>
                        <Card className="m-3">
                            <Card.Img variant="top" src={require("../best/new1.jpg")} />
                            <Card.Body className="text-center">
                                <Card.Title>The Unthinkable Pizza</Card.Title>
                                <span><b>₹.469</b></span>
                                <p>Loaded with Plant Based Protein topping along with Black Olives & Red Paprika enjoy this unique 100%</p>
                                
                                <Button variant="primary" href="#home">ADD TO CART</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={3}>
                        <Card className="m-3">
                            <Card.Img variant="top" src={require("../best/17.jpg")} />
                            <Card.Body className="text-center">
                                <Card.Title>Veggie Paradise</Card.Title>
                                <span><b>₹.569</b></span>
                                <p>Loaded with Plant Based Protein topping along with Black Olives & Red Paprika enjoy this unique 100%</p>
                                <Button variant="primary" href="#home">ADD TO CART</Button>
                            </Card.Body>
                        </Card>
                    </Col> 
                    <Col md={6} lg={3}>
                        <Card className="m-3">
                            <Card.Img variant="top" src={require("../best/new.jpg")} />
                            <Card.Body className="text-center">
                                <Card.Title>Chicken Sausage</Card.Title>
                                <span><b>₹.369</b></span>
                                <p>American classic! Spicy, herbed chicken sausage on pizz</p>
                               
                                <Button className="btn" variant="primary" href="#home">ADD TO CART</Button>
                            </Card.Body>
                        </Card>
                    </Col> 
                     <Col md={6} lg={3}>
                        <Card className="m-3">
                            <Card.Img variant="top" src={require("../best/17.jpg")} />
                            <Card.Body className="text-center">
                                <Card.Title>Veggie Paradise</Card.Title>
                                <span><b>₹.569</b></span>
                                <p>Loaded with Plant Based Protein topping along with Black Olives & Red Paprika enjoy this unique 100%</p>
                                <Button variant="primary" href="#home">ADD TO CART</Button>
                            </Card.Body>
                        </Card>
                    </Col> 

               
                  

                </Row>
            </div>


        </div> 
        </section>
    );
}

export default Prod;