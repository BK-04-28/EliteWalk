import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
const Main = ({ onAddCart }) => {
  const allData = [
    {
      id: 1,
      name: "Running Shoes",
      price: "₹829",
      img: "/Images/Shoes/running.png",
    },
    {
      id: 2,
      name: "Necklace",
      price: "₹255",
      img: "/Images/Accessories/necklace.png",
    },
    {
      id: 3,
      name: "Watch",
      price: "₹499",
      img: "/Images/Accessories/watch.png",
    },
    {
      id: 9,
      name: "Hat",
      price: "₹389",
      img: "/Images/Accessories/hat.png",
    },
    {
      id: 5,
      name: "Cabin Trolley Bag",
      price: "₹6899",
      img: "/Images/Luggages/cabinTrolley.png",
    },
    {
      id: 6,
      name: "Hard Shell Suitcase",
      price: "₹6549",
      img: "/Images/Luggages/hardShell.png",
    },
    {
      id: 7,
      name: "Sneakers",
      price: "₹799",
      img: "/Images/Shoes/style.png",
    },
    {
      id: 8,
      name: "Sneakers",
      price: "₹599",
      img: "/Images/Shoes/sneakers.png",
    },
    {
      id: 9,
      name: "Duffel Bag",
      price: "₹878",
      img: "/Images/Luggages/duffel.png",
    },
    {
      id: 10,
      name: "Travel Backpack",
      price: "₹812",
      img: "/Images/Luggages/travel.png",
    },
    {
      id: 11,
      name: "Formal Shoes",
      price: "₹899",
      img: "/Images/Shoes/formal.png",
    },
    {
      id: 12,
      name: "Loafers",
      price: "₹399",
      img: "/Images/Shoes/loafer.png",
    },
    {
      id: 12,
      name: "Sneakers",
      price: "₹877",
      img: "/Images/Shoes/sneaker2.png",
    },
    {
      id: 13,
      name: "Belt",
      price: "₹200",
      img: "/Images/Accessories/belt.png",
    },
    {
      id: 14,
      name: "Rolling Garment Bag",
      price: "₹8799",
      img: "/Images/Luggages/rolling.png",
    },
    {
      id: 15,
      name: "Business Laptop Trolley",
      price: "₹3430",
      img: "/Images/Luggages/laptop.png",
    },
    {
      id: 16,
      name: "Sandals",
      price: "₹369",
      img: "/Images/Shoes/sandals.png",
    },
    {
      id: 17,
      name: "High Heels",
      price: "₹879",
      img: "/Images/Shoes/highHeels.png",
    },
    {
      id: 18,
      name: "Ankle Boots",
      price: "₹999",
      img: "/Images/Shoes/Ankle.png",
    },
    {
      id: 19,
      name: "Flip Flops",
      price: "₹220",
      img: "/Images/Shoes/flips.png",
    },
    {
      id: 20,
      name: "Scarf",
      price: "₹120",
      img: "/Images/Accessories/scarf.png",
    },
    {
      id: 21,
      name: "Bracelet",
      price: "₹220",
      img: "/Images/Accessories/bracelet.png",
    },
    {
      id: 22,
      name: "Sports Shoes",
      price: "₹499",
      img: "/Images/Shoes/sports.png",
    },
    {
      id: 23,
      name: "Stylish Sneakers",
      price: "₹759",
      img: "/Images/Shoes/sneaker1.png",
    },

    {
      id: 24,
      name: "Handbag",
      price: "₹458",
      img: "/Images/Accessories/handBag.png",
    },
    {
      id: 25,
      name: "Expandable Large Suitcase",
      price: "₹7567",
      img: "/Images/Luggages/large.png",
    },
    {
      id: 26,
      name: "Sunglasses",
      price: "₹258",
      img: "/Images/Accessories/sunGlasses.png",
    },
    {
      id: 27,
      name: "Gloves",
      price: "₹199",
      img: "/Images/Accessories/gloves.png",
    },
    { id: 28, name: "Tie", price: "₹159", img: "/Images/Accessories/tie.png" },
    {
      id: 29,
      name: "Backpack",
      price: "₹1499",
      img: "/Images/Accessories/backpack.png",
    },
    { id: 30, name: "Ring", price: "$35", img: "/Images/Accessories/ring.png" },
    {
      id: 31,
      name: "Sketchers",
      price: "₹1199",
      img: "/Images/Shoes/sketchers.png",
    },
    {
      id: 31,
      name: "Nylon Soft Luggage",
      price: "₹4588",
      img: "/Images/Luggages/nylon.png",
    },
    {
      id: 32,
      name: "Travel Bag",
      price: "₹4378",
      img: "/Images/Luggages/travel1.png",
    },
    {
      id: 33,
      name: "Luxury Laptop Bag",
      price: "₹4890",
      img: "/Images/Luggages/laptop1.png",
    },
    {
      id: 34,
      name: "Mini Travel Bag",
      price: "₹599",
      img: "/Images/Luggages/mini.png",
    },
  ];
  return (
    <>
      <Container className="my-4">
        <Row>
          {allData.map((item) => (
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
    </>
  );
};

export default Main;
