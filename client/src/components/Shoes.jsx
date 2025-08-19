import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
const Shoes = ({ onAddCart }) => {
  const shoesData = [
    {
      id: 1,
      name: "Running Shoes",
      price: "₹829",
      img: "/Images/Shoes/running.png",
    },
    {
      id: 2,
      name: "Sneakers",
      price: "₹599",
      img: "/Images/Shoes/sneakers.png",
    },
    {
      id: 3,
      name: "Formal Shoes",
      price: "₹899",
      img: "/Images/Shoes/formal.png",
    },
    {
      id: 4,
      name: "Loafers",
      price: "₹399",
      img: "/Images/Shoes/loafer.png",
    },
    {
      id: 5,
      name: "Sandals",
      price: "₹369",
      img: "/Images/Shoes/sandals.png",
    },
    {
      id: 6,
      name: "High Heels",
      price: "₹879",
      img: "/Images/Shoes/highHeels.png",
    },
    {
      id: 7,
      name: "Ankle Boots",
      price: "₹999",
      img: "/Images/Shoes/Ankle.png",
    },
    {
      id: 8,
      name: "Flip Flops",
      price: "₹220",
      img: "/Images/Shoes/flips.png",
    },
    {
      id: 9,
      name: "Sports Shoes",
      price: "₹499",
      img: "/Images/Shoes/sports.png",
    },
    {
      id: 10,
      name: "Stylish Sneakers",
      price: "₹759",
      img: "/Images/Shoes/sneaker1.png",
    },
    {
      id: 11,
      name: "Sketchers",
      price: "₹1199",
      img: "/Images/Shoes/sketchers.png",
    },
    {
      id: 12,
      name: "Sneakers",
      price: "₹799",
      img: "/Images/Shoes/style.png",
    },
  ];

  return (
    <>
      <Container className="my-4">
        <Row>
          {shoesData.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="h-100 shadow-sm">
                <div className="image-container">
                  <Card.Img variant="top" src={item.img} />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.price}</Card.Text>
                  <Button
                    variant="primary"
                    className="mt-auto"
                    onClick={() => onAddCart(item)}
                  >
                    Add to Cart
                  </Button>
                  <Button variant="primary" className=" mt-2">
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Shoes;
