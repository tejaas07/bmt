import React from "react";
import Logo from "../../Assets/Images/brahma log.png";
import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="footerbg"
      // class="fixed-bottom"
    >
      <div className="footer">
        <div className="footerlogoT">
          <img
            src={Logo}
            style={{
              height: 40,
              width: 40,
              marginRight: 10,
              borderRadius: 20,
            }}
            alt=""
          />
          Brahma Technologies India
        </div>
        <div className="links">
          <span className="lk">
            <a
              href="https://instagram.com/brahmatechnologies?igshid=MDE2OWE1N2Q="
              target="true"
            >
              <FiInstagram size={18} />
            </a>
          </span>
          <span className="lk">
            <a
              href="https://www.linkedin.com/in/brahma-technologies-5b9b64192/"
              target="true"
            >
              <BsLinkedin size={18} />
            </a>
          </span>
        </div>
      </div>
      <hr style={{ color: "red" }} />
      <div className="dev">
        Copyright <FaRegCopyright size={"15"} className="C-logo" /> Brahma
        Technologies | Designed and Developed by Tejas Kadam
      </div>
    </div>
  );
};

export default Footer;
