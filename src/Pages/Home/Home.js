import React from "react";
import "./Home.css";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Carousel } from "@mantine/carousel";
import ProductList from "../../Assets/Data/ProductList";
import { Container, Stack, Button, Grid } from "@mantine/core";
import { FaHome, FaInfo, FaPhoneAlt, FaUserCheck } from "react-icons/fa";
import Autoplay from "embla-carousel-autoplay";
// import Nav from "react-bootstrap/Nav";

const Home = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <div id="home" className="home">
      <Carousel
        slideSize="100%"
        sx={{ maxWidth: "100%" }}
        styles={{ zindex: -1 }}
        plugins={[autoplay.current]}
      >
        {ProductList.map((val, i) => (
          <Carousel.Slide>
            <div className="carl">
              <div className="caroulsalText">
                {val.productName}
                <div>
                  <Button
                    className="navButton"
                    onClick={(event) => (window.location.href = "/product")}
                  >
                    Know More
                  </Button>
                </div>
              </div>
              <div className="caroulsalImage">
                <img src={val.img} className="carImage" alt="" />
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
      <div>
        <div className="CompanyName">Brahma Technologies India</div>
        <p className="desc">
          We would like to introduce ourself (Brahma Technologies India) as a
          Manufacturer of Patient Nurse Call Bell System, the product has been
          designed by Brahma Technologies after intense research done on the
          existing Call Bell Systems available in the market. We have been in
          the market since last decade.
          <br />
          We are serving Hospitals across Mumbai & Other Places with no
          registered complaints with the technology till date.
        </p>
      </div>
      {/* <div
        className="CompanyName"
        style={{ paddingTop: "3%", fontWeight: 400 }}
      >
        Know More
      </div> */}
      {/* <div className="grid">
        <div className="gridChild">
          <Link href="#products">
            <FaInfo size={40} style={{ margin: "1%" }} />
            <Button style={{ width: "100%", height: "50px", color: "#000" }}>
              Our Products
            </Button>
          </Link>
        </div>

        <div className="gridChild">
          <Link href="#AboutUs">
            <FaUserCheck size={40} style={{ margin: "1%" }} />
            <Button style={{ width: "100%", height: "50px", color: "#000" }}>
              Our Clients
            </Button>
          </Link>
        </div>

        <div className="gridChild">
          <Link href="#contactUs">
            <FaPhoneAlt size={40} style={{ margin: "1%" }} />
            <Button style={{ width: "100%", height: "50px", color: "#000" }}>
              Contact Us
            </Button>
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
