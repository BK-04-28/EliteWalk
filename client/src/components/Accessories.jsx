import React from "react";
// import MyNavbar from "./MyNavbar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Accessories = ({ onAddCart }) => {
  const accessoriesData = [
    {
      id: 1,
      name: "Leather Wallet",
      price: "₹169",
      img: "/Images/Accessories/LeatherWallet.png",
    },
    {
      id: 2,
      name: "Sunglasses",
      price: "₹258",
      img: "/Images/Accessories/sunGlasses.png",
    },
    {
      id: 3,
      name: "Watch",
      price: "₹499",
      img: "/Images/Accessories/watch.png",
    },
    {
      id: 4,
      name: "Cap",
      price: "₹249",
      img: "/Images/Accessories/cap.png",
    },
    {
      id: 5,
      name: "Belt",
      price: "₹200",
      img: "/Images/Accessories/belt.png",
    },
    {
      id: 6,
      name: "Blue SunGlass",
      price: "₹299",
      img: "/Images/Accessories/BlueSun.png",
    },
    {
      id: 7,
      name: "Scarf",
      price: "₹120",
      img: "/Images/Accessories/scarf.png",
    },
    {
      id: 8,
      name: "Bracelet",
      price: "₹220",
      img: "/Images/Accessories/bracelet.png",
    },
    {
      id: 9,
      name: "Hat",
      price: "₹389",
      img: "/Images/Accessories/hat.png",
    },
    {
      id: 10,
      name: "Necklace",
      price: "₹255",
      img: "/Images/Accessories/necklace.png",
    },
    {
      id: 11,
      name: "Gloves",
      price: "₹199",
      img: "/Images/Accessories/gloves.png",
    },
    { id: 12, name: "Tie", price: "₹159", img: "/Images/Accessories/tie.png" },
    {
      id: 13,
      name: "Backpack",
      price: "₹1499",
      img: "/Images/Accessories/backpack.png",
    },
    { id: 14, name: "Ring", price: "$35", img: "/Images/Accessories/ring.png" },
    {
      id: 15,
      name: "Keychain",
      price: "₹99",
      img: "/Images/Accessories/keyChain.png",
    },
    {
      id: 16,
      name: "EarRing",
      price: "₹49",
      img: "/Images/Accessories/earRing.png",
    },
  ];
  return (
    <>
      {/* <MyNavbar /> */}
      <Container className="my-4">
        <Row>
          {accessoriesData.map((item) => (
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
export default Accessories;
