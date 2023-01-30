import React, { useState } from "react";
import ProductList from "../../Assets/Data/ProductList";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Modal,
  Container,
} from "@mantine/core";
import Form from "../../Components/Form/Form";
import "./Products.css";

const Products = () => {
  const [showForm, setShowForm] = useState(false);
  const formOpener = () => {
    setShowForm(true);
  };
  const formHider = () => {
    setShowForm(false);
  };

  return (
    <div className="header" id="products">
      <Container className="container">
        <div
          style={{
            fontSize: "32px",
          }}
        >
          Our Products
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
          className="cardContainer"
        >
          {ProductList.map((val, i) => (
            <div className="card">
              <span className="Img">
                <img
                  src={val.img}
                  // height={300}
                  className="productImg"
                  alt="Norway"
                />
              </span>
              <span className="text">
                <div className="prodName">
                  <Text weight={500}>{val.productName}</Text>
                </div>
                <div className="prodDesc">
                  <p>{val.description}</p>
                </div>
                <Button
                  variant="light"
                  color="blue"
                  style={{
                    width: "50%",
                    color: "blue",
                    fontSize: "16px",
                  }}
                  mt="md"
                  radius="md"
                  onClick={() => {
                    setShowForm(true);
                  }}
                >
                  Get Quote
                </Button>
              </span>
            </div>
          ))}
        </div>
        {showForm ? (
          <Modal size="md" opened={formOpener} onClose={() => formHider()}>
            <Form hide={formHider} />
          </Modal>
        ) : (
          ""
        )}
      </Container>
    </div>
  );
};

export default Products;
{
  /* <Card shadow="sm" p="lg" radius="md" withBorder>
                <Card.Section>
                  <img
                    src={val.img}
                    height={300}
                    className="productImg"
                    alt="Norway"
                  />
                </Card.Section>

                <Group position="center" mt="" mb="xs">
                  <Text weight={500}>{val.productName}</Text>
                </Group>

                <Button
                  variant="light"
                  color="blue"
                  fullWidth
                  mt="md"
                  radius="md"
                  onClick={() => {
                    setShowForm(true);
                  }}
                >
                  Get Quote
                </Button>
              </Card> */
}
