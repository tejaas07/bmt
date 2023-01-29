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
      <nav class="navbar navbar-expand-lg bg-body-tertiary justify-content-end">
        <div class="container-fluid">
          <img alt="logo" src={Logo} className="logoImg" style={{}} />
          <a
            class="navbar-brand"
            // style={{
            //   color: "#6b3636",
            //   fontWeight: 600,
            //   fontSize: "33px",
            //   marginLeft: "10px",
            // }}
            href="#"
          >
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
            {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul> */}
            <div
              class="navbar-nav nc ms-auto"
              // className="nc"
              style={
                {
                  // width: "100%",
                  // textAlign: "center",
                }
              }
            >
              <ul
                class="navbar-nav me-auto mb-2 mb-lg-0"
                style={{
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <li
                  style={{
                    // width: "100%",
                    textAlign: "center",
                  }}
                >
                  <BsFillHouseDoorFill />

                  <Link
                    class="nav-link active"
                    style={{ paddingTop: "1px" }}
                    aria-current="page"
                    href="#"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <BsFillPhoneFill />
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
                  <BsInfoCircleFill />
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
                  <BsTelephoneFill />
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
