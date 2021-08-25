import React from "react";
import { Card, Button } from "react-bootstrap";

export const CardTaskParent = () => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Img variant="top" src="./logo192.png" />
          <Card.Title>Card Title</Card.Title>
          <Card.Text></Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardTaskParent;
