import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import axios from "axios";

export const Table = () => {
  const [cntr, setCntr] = useState(0);
  const [nsme, setName] = useState("Synechron");
  const handleApi = () => {
    axios.get("http://localhost:5170/emp").then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div>
      <Row>
        <Col md={8}>
          <h4>{`i am working for {name}`}</h4>
          <Button onClick={() => setName("PickupBiz")}>PickupBiz</Button>
          <br />
          <br />
          <Button onClick={() => setName("Microsoft")}>Microsoft</Button>
          <br />
          <br />
          <Button onClick={handleApi}>call my API</Button>
          <h2>{cntr}</h2>
        </Col>
      </Row>
    </div>
  );
};
