import React, { useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import "../component/Emicalc.css";

export const Emicalc = () => {
  const [p, setP] = useState(0);
  const [n, setN] = useState(0);
  const [r, setR] = useState(0);
  const [emi, setEmi] = useState(0);

  const handleCalEMI = () => {
    const si = (p * n * r) / 100;
    const repayAmount = Number(p) + Number(si);
    const emiLocal = repayAmount / (n * 12);
    setEmi(emiLocal);
  };
  return (
    <div>
      <Card>
        <Row className="Calc">
          <Col md="1"></Col>
          <Col md="3">
            <Form.Control
              type="number"
              placeholder="Principal"
              onChange={(e) => setP(e.target.value)}
            />
          </Col>
          <Col md="3">
            <Form.Control
              type="number"
              placeholder="Number of Years"
              onChange={(e) => setN(e.target.value)}
            />
          </Col>
          <Col md="3">
            <Form.Control
              type="number"
              placeholder="Rate of Interesrt"
              onChange={(e) => setR(e.target.value)}
            />
          </Col>
          <Col md="2">
            <Button variant="primary" onClick={() => handleCalEMI()}>
              Calculate EMI
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md="3"></Col>
          <Col md="6">
            <h1> Simple Interest :{emi}</h1>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Emicalc;
