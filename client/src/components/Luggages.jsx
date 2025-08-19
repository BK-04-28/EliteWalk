import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
const Luggages = ({ onAddCart }) => {
  const luggageData = [
    {
      id: 1,
      name: "Cabin Trolley Bag",
      price: "₹6899",
      img: "/Images/Luggages/cabinTrolley.png",
    },
    {
      id: 2,
      name: "Hard Shell Suitcase",
      price: "₹6549",
      img: "/Images/Luggages/hardShell.png",
    },
    {
      id: 3,
      name: "Duffel Bag",
      price: "₹878",
      img: "/Images/Luggages/duffel.png",
    },
    {
      id: 4,
      name: "Travel Backpack",
      price: "₹812",
      img: "/Images/Luggages/travel.png",
    },
    {
      id: 5,
      name: "Rolling Garment Bag",
      price: "₹8799",
      img: "/Images/Luggages/rolling.png",
    },
    {
      id: 6,
      name: "Business Laptop Trolley",
      price: "3430",
      img: "/Images/Luggages/laptop.png",
    },
    {
      id: 7,
      name: "Expandable Large Suitcase",
      price: "₹7567",
      img: "/Images/Luggages/large.png",
    },
    {
      id: 8,
      name: "Nylon Soft Luggage",
      price: "₹4588",
      img: "/Images/Luggages/nylon.png",
    },
    {
      id: 9,
      name: "Travel Bag",
      price: "₹4378",
      img: "/Images/Luggages/travel1.png",
    },
    {
      id: 10,
      name: "Luxury Laptop Bag",
      price: "₹4890",
      img: "/Images/Luggages/laptop1.png",
    },
    {
      id: 11,
      name: "Expandable Trolley",
      price: "₹8999",
      img: "/Images/Luggages/trolley.png",
    },
    {
      id: 12,
      name: "Mini Travel Bag",
      price: "₹599",
      img: "/Images/Luggages/mini.png",
    },
  ];

  return (
    <Container className="my-4">
      <Row>
        {luggageData.map((item) => (
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
  );
};

export default Luggages;
