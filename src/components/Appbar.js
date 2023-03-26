import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cart from "./Cart";
import '../App.css';


function AppBar() {
  return ( 
    <>
    <Navbar bg="navbar sticky-top navbar-light bg-light" expand="lg" >
    <Container postion>
      <Navbar.Brand href="#home"><h2 className='text-Dark' id='name'><span><i className="bi bi-yelp"></i>Pizza Hunt </span></h2></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
        <Nav >
          <Nav.Link href="#home" className='fw-bold'>Home</Nav.Link>
          <Nav.Link href="#NEW LAUNCHES"  className='fw-bold'>New launches</Nav.Link>

          <Nav.Link href="#Menu"  className='fw-bold'>Menu</Nav.Link>
          <Nav.Link href="#Musttry"  className='fw-bold'>Must try</Nav.Link>
          <Nav.Link href="#BESTSELLERS"  className='fw-bold'>BestSellers</Nav.Link>
          <Nav.Link href="#BEVERAGES"  className='fw-bold'>Beverages</Nav.Link>
          <Nav.Link href="#SIDES"  className='fw-bold'>Sides</Nav.Link>
          <Nav.Link href="#Desserts"  className='fw-bold'>Dessert</Nav.Link>
          <Nav.Link href="#Contact us"  className='fw-bold'>Contact us</Nav.Link>

         
          

          <Cart/>
        </Nav>
      </Navbar.Collapse>
    </Container>
   
  </Navbar>
 
  </>
  
  )
}

export default AppBar;