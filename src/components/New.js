
import React from "react";
import { Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import './Style.css'
const New = () => {
    return (
        <section  id="NEW LAUNCHES">
        <div  className="product" >
            <div className="container-fluid" >
                <h4 className="heading text-left color-green" >New launches</h4>
                <Row className="pro">
                    <Col md={6} lg={3}>
                        <Card className="m-3">
                            <Card.Img variant="top" src={require("../new/Corn.jpg")} />
                            <Card.Body className="text-center">
                                <Card.Title>Corn Cheese Pizza</Card.Title>
                                <span><b>₹ 179</b></span>
                                <p>corn stuffed paratha and cheesy pizza.</p>
                                <Button variant="outline-success">ADD TO Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col> 
                    <Col md={6} lg={3}>
                        <Card className="m-3">
                            <Card.Img variant="top" src={require("../new/Par.jpg")} />
                            <Card.Body className="text-center">
                                <Card.Title>Paneer Paratha Pizza</Card.Title>
                                <span><b>₹ 209</b></span>
                                <p>cheese & soft paneer fillings to satisfy all your indulgen</p>
                                <Button variant="outline-success">ADD TO Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col> 
                    <Col md={6} lg={3}>
                        <Card className="m-3">
                            <Card.Img variant="top" src={require("../new/Ka.jpg")} />
                            <Card.Body className="text-center">
                                <Card.Title>Chicken Keema Paratha Pizza</Card.Title>
                                <span><b>₹ 249</b></span>
                                <p> cheesy pizza coming together in an epic crossov</p>
                                <Button variant="outline-success">ADD TO Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col> 
                   
                    <Col md={6} lg={3}>
                        <Card className="m-3">
                            <Card.Img variant="top" src={require("../new/Ka.jpg")} />
                            <Card.Body className="text-center">
                                <Card.Title>Chicken KeemaPizza</Card.Title>
                                <span><b>₹ 349</b></span>
                                <p> cheesy pizza coming together in an epic crossov</p>
                                <Button variant="outline-success">ADD TO Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col> 
                    <Col md={6} lg={3}>
                        <Card className="m-3">
                            <Card.Img variant="top" src={require("../new/PIZ.jpg")} />
                            <Card.Body className="text-center">
                                <Card.Title>Chicken Maximus</Card.Title>
                                <span><b>₹ 699</b></span>
                                <p> Chicken Sausage and a double dose of grilled Chicken</p>
                                <Button variant="outline-success">ADD TO Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col> 
                    <Col md={6} lg={3}>
                        <Card className="m-3">
                            <Card.Img variant="top" src={require("../new/PIZ.jpg")} />
                            <Card.Body className="text-center">
                                <Card.Title>The 5 Chicken Feast Pizza</Card.Title>
                                <span><b>₹ 699</b></span>
                                <p>  grilled Chicken Rashers, Chicken Meatballs, Chicken Tikka,</p>
                                <Button variant="outline-success">ADD TO Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col> 
                    <Col md={6} lg={3}>
                        <Card className="m-3">
                            <Card.Img variant="top" src={require("../new/PIZ.jpg")} />
                            <Card.Body className="text-center">
                                <Card.Title>Indo Fusion Chicken Pizza</Card.Title>
                                <span><b>₹ 699</b></span>
                                <p>  Relish the chicken toppings - Peri Peri Chicken,,</p>
                                <Button variant="outline-success">ADD TO Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col> 
                    <Col md={6} lg={3}>
                        <Card className="m-3">
                            <Card.Img variant="top" src={require("../new/PIZ.jpg")} />
                            <Card.Body className="text-center">
                                <Card.Title>Chicken Pizza</Card.Title>
                                <span><b>₹ 699</b></span>
                                <p>  Relish the chicken toppings - Peri Peri Chicken,,</p>
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

export default New;