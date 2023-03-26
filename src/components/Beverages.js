
import React from "react";
import { Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import './Style.css';


const Beverages = () => {
    return (
        <section id="BEVERAGES">
        <div className="product" >
            <div className="container-fluid">
                <h4 className="heading text-left color-green">Beverage</h4>
                <Row className="pro">
                    <Col md={6} lg={3}>
                        <Card className="m-3">
                            <Card.Img variant="top" src={require("../image/1.jpg")} />
                            <Card.Body className="text-center">
                                <Card.Title>Pepsi 475ml</Card.Title>
                                <span><b>₹.60</b></span>
                                <p>Sparkling Refreshing Beverage</p>
                                <Button variant="outline-success">ADD TO Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={3}>
                        <Card className="m-3">
                            <Card.Img variant="top" src={require("../image/7.jpg")} />
                            <Card.Body className="text-center">
                                <Card.Title>7Up 475m</Card.Title>
                                <span><b>₹ 60</b></span>
                                <p>Refreshing natural lemon flavor</p>
                              
                                <Button variant="outline-success" href="#home">ADD TO Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={3}>
                        <Card className="m-3">
                            <Card.Img variant="top" src={require("../image/m3.jpg")} />
                            <Card.Body className="text-center">
                                <Card.Title>VMirinda 475ml</Card.Title>
                                <span><b>₹.60</b></span>
                                <p>Delicious Orange Flavoured beverage</p>
                                <Button variant="outline-success" href="#home">ADD TO CART</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={3}>
                        <Card className="m-3">
                            <Card.Img variant="top" src={require("../image/24.jpg")} />
                            <Card.Body className="text-center">
                                <Card.Title>Lipton Ice Tea ( 350 ml)</Card.Title>
                                <span><b>₹.60</b></span>
                                <p>Refreshment Sahi, Gas Nahi</p>
                               
                                <Button className="btn" variant="outline-success" href="#home">ADD TO CART</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={3}>
                        <Card className="m-3">
                            <Card.Img variant="top" src={require("../image/MIX.jpg")} />
                            <Card.Body className="text-center">
                                <Card.Title> Mixed Fruit Himalayas </Card.Title>
                                <span><b>₹ 60</b></span>
                                <p>Black Olives & Red Paprika unique </p>
                                
                                <Button variant="outline-success" href="#home">ADD TO CART</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={3}>
                        <Card className="m-3">
                            <Card.Img variant="top" src={require("../image/n2.jpg")} />
                            <Card.Body className="text-center">
                                <Card.Title>Slice (350ml)</Card.Title>
                                <span><b>₹ 50</b></span>
                                <p>Great Mango Taste</p>
                                <Button variant="outline-success" href="#home">ADD TO CART</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={3}>
                        <Card className="m-3">
                            <Card.Img variant="top" src={require("../image/ALP.jpg")} />
                            <Card.Body className="text-center">
                                <Card.Title> Alphonsos Ratnagiri</Card.Title>
                                <span><b>₹ 70</b></span>
                                <p>Alphonsos Ratnagiri of Fiber</p>
                                <Button variant="outline-success" href="#home">ADD TO CART</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={3}>
                        <Card className="m-3">
                            <Card.Img variant="top" src={require("../image/20.jpg")} />
                            <Card.Body className="text-center">
                                <Card.Title>Nimbooz ( 350ml )</Card.Title>
                                <span><b>₹ 60</b></span>
                                <p>Nimbooz ( 350ml )</p>
                                <Button variant="outline-success" href="#home">ADD TO CART</Button>
                            </Card.Body>
                        </Card>
                    </Col>

               
                  

                </Row>
            </div>


        </div> 
        </section>
    );
}

export default Beverages;