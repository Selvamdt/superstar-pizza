
import React from "react";
import { Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import './Style.css'
const Sides = () => {
    return (
        <section  id="SIDES">
        <div  className="product" >
            <div className="container-fluid" >
                <h4 className="heading text-left color-green" >Sides</h4>
                <Row className="pro">
                    <Col md={6} lg={3}>
                        <Card className="m-3">
                            <Card.Img variant="top" src={require("../image/Gar.jpg")} />
                            <Card.Body className="text-center">
                                <Card.Title>Garlic Breadsticks</Card.Title>
                                <span><b>₹ 169</b></span>
                                <p>Baked to perfection. Your perfect pizza</p>
                                <Button variant="outline-success">ADD TO Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col> 
                    <Col md={6} lg={3}>
                        <Card className="m-3">
                            <Card.Img variant="top" src={require("../image/BR.jpg")} />
                            <Card.Body className="text-center">
                                <Card.Title>Classic Stuffed Garlic Bread</Card.Title>
                                <span><b>₹.159</b></span>
                                <p>Freshly baked garlic bread</p>
                                <Button variant="outline-success">ADD TO Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={3}>
                        <Card className="m-3">
                            <Card.Img variant="top" src={require("../image/Stuf.jpg")} />
                            <Card.Body className="text-center">
                                <Card.Title>Paneer Tikka Stuffed Garlic Bread</Card.Title>
                                <span><b>₹.169</b></span>
                                <p>Freshly Baked Stuffed Garlic Bread with Cheese</p>
                                <Button variant="outline-success">ADD TO Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={3}>
                        <Card className="m-3">
                            <Card.Img variant="top" src={require("../image/Gar.jpg")} />
                            <Card.Body className="text-center">
                                <Card.Title>Taco Mexicana Veg</Card.Title>
                                <span><b>₹.60</b></span>
                                <p>Crispy taco with veg patty & creamy harissa sauce</p>
                                <Button variant="outline-success">ADD TO Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
            </div>


        </div> 
        </section>
    );
}

export default Sides;