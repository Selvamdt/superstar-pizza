
import React from "react";
import { Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import './Style.css'
const Dest = () => {
    return (
        <section  id="Desserts">
        <div  className="product" >
            <div className="container-fluid" >
                <h4 className="heading text-left color-green" >Desserts</h4>
                <Row className="pro">
                    <Col md={6} lg={3}>
                        <Card className="m-3">
                            <Card.Img variant="top" src={require("../image/Choc.png")} />
                            <Card.Body className="text-center">
                                <Card.Title>Choco Lava Cake</Card.Title>
                                <span><b>₹ 109</b></span>
                                <p>gooey molten lava inside chocolate cake</p>
                                <Button variant="outline-success">ADD TO Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col> 
                    <Col md={6} lg={3}>
                        <Card className="m-3">
                            <Card.Img variant="top" src={require("../image/But.jpg")} />
                            <Card.Body className="text-center">
                                <Card.Title>Butterscotch Mousse Cake</Card.Title>
                                <span><b>₹ 109</b></span>
                                <p>Sweet temptation! Butterscotch flavored mousse</p>
                                <Button variant="outline-success">ADD TO Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col> 
                    <Col md={6} lg={3}>
                        <Card className="m-3">
                            <Card.Img variant="top" src={require("../image/Choc.png")} />
                            <Card.Body className="text-center">
                                <Card.Title>Brownie Fantasy</Card.Title>
                                <span><b>₹ 79</b></span>
                                <p>Brownie drizzled with chocolate fudge sauce</p>
                                <Button variant="outline-success">ADD TO Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col> 
                    <Col md={6} lg={3}>
                        <Card className="m-3">
                            <Card.Img variant="top" src={require("../image/com.jpg")} />
                            <Card.Body className="text-center">
                                <Card.Title>Pizzas + Sides & Pepsi</Card.Title>
                                <span><b>₹ 79</b></span>
                                <p>gooey molten lava inside chocolate cake</p>
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

export default Dest;