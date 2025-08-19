import React from "react";
import { Container, Table, Button } from "react-bootstrap";
// import MyNavbar from "./MyNavbar";

const CartPage = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => {
    const price = Number(item.price.replace("$", "")); // remove $ and convert
    return total + price;
  }, 0);

  return (
    <>
      {/* <MyNavbar /> */}
      <Container className="my-4">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <img src={item.img} alt={item.name} width="100" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <h4>Total: ${totalPrice}</h4>
            <Button variant="success">Checkout</Button>
          </>
        )}
      </Container>
    </>
  );
};

export default CartPage;
