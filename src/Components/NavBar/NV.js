import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BsFillHouseDoorFill,
  BsFillPhoneFill,
  BsInfoCircleFill,
  BsTelephoneFill,
} from "react-icons/bs";
// import "./Navbar.css";
import "./NV.css";
import Logo from "../../Assets/Images/brahma log.png";

const NV = () => {
  const navigate = useNavigate();
  return (
    <div className="navBar-div">
      <nav
        class="navbar navbar-expand-lg bg-body-tertiary justify-content-end"
        style={{
          backgroundColor: "red",
        }}
      >
        <div class="container-fluid">
          <img alt="logo" src={Logo} className="logoImg" style={{}} />
          <a class="navbar-brand" href="#">
            Brahma Technologies (India)
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse "
            style={
              {
                // textAlign: "center",
              }
            }
            id="navbarText"
          >
            <div
              class="navbar-nav nc ms-auto"
              // className="nc"
              style={{}}
            >
              <ul
                class="navbar-nav me-auto mb-2 mb-lg-0"
                style={{
                  width: "100%",
                  textAlign: "center",
                  fontSize: "19px",
                  fontWeight: "500",
                }}
              >
                <li
                  style={{
                    textAlign: "center",
                  }}
                >
                  <BsFillHouseDoorFill className="icn" />

                  <Link
                    class="nav-link active"
                    style={{ paddingTop: "1px" }}
                    aria-current="page"
                    to="/"
                    onClick={() => {
                      console.log("Hi");
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <BsFillPhoneFill className="icn" />
                  <Link
                    class="nav-link active"
                    style={{ paddingTop: "1px" }}
                    aria-current="page"
                    // href="/product"
                    to="/product"
                  >
                    Our Products
                  </Link>
                </li>
                <li>
                  <BsInfoCircleFill className="icn" />
                  <Link
                    class="nav-link active"
                    style={{ paddingTop: "1px" }}
                    aria-current="page"
                    href="#"
                    to="/AboutUs"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <BsTelephoneFill className="icn" />
                  <Link
                    class="nav-link active"
                    style={{ paddingTop: "1px" }}
                    aria-current="page"
                    href="#"
                    to="/contactUs"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NV;
