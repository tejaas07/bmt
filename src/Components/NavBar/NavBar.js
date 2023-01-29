import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

import Logo from "../../Assets/Images/brahma log.png";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [linkLocation, setLinkLocation] = useState();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar bg="light" collapseOnSelect fixed="top" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              // alt="logo"
              src={Logo}
              className="logoImg"
              style={{}}
            />
            <span className="logoName">Brahma Technologies (India)</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav
              // className=""
              style={{ maxHeight: "100px" }}
              className="justify-content-en"
              navbarScroll
            >
              <Nav.Link href="#home">
                <div
                  style={{
                    textAlign: "center",
                    fontWeight: "700",
                    color: "#000",
                  }}
                >
                  Home
                </div>
              </Nav.Link>{" "}
              <Nav.Link href="#products">
                <div
                  style={{
                    textAlign: "center",
                    fontWeight: "700",
                    color: "#000",
                  }}
                >
                  Our Products
                </div>
              </Nav.Link>{" "}
              <Nav.Link href="#AboutUs">
                <div
                  style={{
                    textAlign: "center",
                    fontWeight: "700",
                    color: "#000",
                  }}
                >
                  About Us
                </div>
              </Nav.Link>
              <Nav.Link href="#contactUs">
                <div
                  style={{
                    textAlign: "center",
                    fontWeight: "700",
                    color: "#000",
                  }}
                >
                  Contact Us
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
