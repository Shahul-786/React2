import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Nav, Container, Carousel } from 'react-bootstrap';
import { Link, Element } from 'react-scroll';
import Products from './Products';

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="home" smooth={true} duration={500}>
            Dress Shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="home" smooth={true} duration={500}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="products" smooth={true} duration={500}>
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="about" smooth={true} duration={500}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to="contact" smooth={true} duration={500}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Element name="home">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/img1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Welcome to Dress Shop</h3>
                <p>Discover the latest fashion trends.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/img2.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Explore Our New Arrivals</h3>
                <p>Find stylish and comfortable clothing for every occasion.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/img3.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Shop the Latest Trends</h3>
                <p>Upgrade your wardrobe with our trendy collection.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Element>

        <Element name="products">
          <h2>Our Dress Products</h2>
        </Element>
        
        <Element name="products">
          <Products />
        </Element>

        <Element name="about">
          <div id="about" className="text-center">
            <h2 className="mt-5 about-title">About Us</h2>
            <p className="lead about-description">
              Welcome to Dress Shop, your go-to destination for the latest
              fashion trends. We strive to provide high-quality clothing for
              every occasion, ensuring you look and feel your best.
            </p>
          </div>
        </Element>

        <Element name="contact">
          <div id="contact" className="text-center">
            <h2 className="mt-5">Contact Us</h2>
            <div className="contact-form mx-auto">
            <p>Email: info@dressshop.com</p>
            <p>  Mobile Number:0123456789</p>
            </div>
          </div>
        </Element>
      </Container>
    </div>
  );
}

export default App;
