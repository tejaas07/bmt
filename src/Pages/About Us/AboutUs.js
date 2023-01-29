import React from "react";
import Cliens from "../../Assets/Data/ClientList";
import { Container } from "@mantine/core";
import { Table } from "@mantine/core";
import "./AboutUs.css";
import TopClient from "../../Assets/Data/MainClient";
const AboutUs = () => {
  return (
    <Container className="container">
      <div id="AboutUs">
        <div className="header">About Us</div>
        <p>
          We would like to introduce ourself (Brahma Technologies India) as a
          Manufacturer of Patient Nurse Call Bell System the product has been
          designed by Brahma Technologies Team Contact Nos after intense
          research done on the existing Call Bell Systems available in the
          market. We are being in the market since last decade.
          <br />
          We are serving Hospitals across Mumbai & Other Places with no
          registered complaints with the technology till date. We are confident
          that after going through our product you would surely give us an
          opportunity to serve you.
        </p>
        <div className="header">Our Clients</div>
        <div className="clientImage">
          {TopClient.map((val, i) => (
            <div className="listContainer">
              <img src={val.img} alt="" />
            </div>
          ))}
        </div>
        <Table
          style={{ margin: "auto", marginBottom: "3%" }}
          withBorder
          withColumnBorders
          horizontalSpacing="lg"
          verticalSpacing="xs"
        >
          <thead style={{ textAlign: "center" }}>
            <tr style={{ textAlign: "center" }}>
              <th style={{ textAlign: "center" }}>Clients</th>
              <th style={{ textAlign: "center" }}>Location</th>
            </tr>
          </thead>
          <tbody>
            {Cliens.map((val, i) => (
              <tr>
                <td style={{ alignItems: "center" }}>{val.client}</td>
                <td>{val.location}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default AboutUs;
