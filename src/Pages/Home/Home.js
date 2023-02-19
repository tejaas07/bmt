import React from "react";
import "./Home.css";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Carousel } from "@mantine/carousel";
import ProductList from "../../Assets/Data/ProductList";
import { Container, Stack, Button, Grid } from "@mantine/core";
import { FaHome, FaInfo, FaPhoneAlt, FaUserCheck } from "react-icons/fa";
import Autoplay from "embla-carousel-autoplay";
import Pdf1 from "../../Assets/Images/PDFpg1.png";
import Pdf2 from "../../Assets/Images/pdf2.png";

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
        loop
        dragFree
        withControls={false}
      >
        {ProductList.map((val, i) => (
          <Carousel.Slide>
            <div className="carl">
              <div className="caroulsalText">
                {val.productName}
                <br />
                {val.desc}
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
          Established in 2006, BRAHMA TECHNOLOGIES (INDIA) has made a name for
          itself in the list of top manufacture suppliers of call bell system in
          India. The supplier and manufacturing company is located in Mumbai,
          Maharashtra and is one of the leading sellers of listed products.
          <br />
          BRAHMA TECHNOLOGIES (INDIA) The product has been designed by our own
          R&D team after intense research done on existing call bell system
          available in market.
          <br />
          BRAHMA TECHNOLOGIES (INDIA) are being in the market since last
          decades, we are serving the hospitals and guest houses across the
          India with no registered complaints with the technology of our call
          bell system till date, we are confident that after going through our
          product would surely give us an opportunity to give you a
          demonstration of our system.
        </p>
      </div>
      <div>
        <div className="CompanyName">Our Product</div>
        <div className="pdfImg">
          <img src={Pdf1} alt="" />
          <img src={Pdf2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
