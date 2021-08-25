import React from "react";
import { useState } from "react";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getEmpDetails } from "../State/Selector/EmpDetailSelector";
import { addEmp } from "../State/Action/EmpDetailsAction";

export const EmpDetail = () => {
  const selector = useSelector(getEmpDetails);
  const [empData, setEmpData] = useState(selector);
  const [newMentersData, setNewMentersData] = useState();

  const [sendData, setSendData] = useState();
  const dispatch = useDispatch();

  const handleDispatch = () => {
    dispatchEvent(addEmp(newMentersData));
  };

  return (
    <div>
      <Row>
        <Col>
          <Form.Control
            placeholder="menter name"
            display={{ margin: "25px" }}
            onChange={(e) => setNewMentersData(e.target.value)}
          />
        </Col>
        <Button onClick={handleDispatch}>change</Button>
      </Row>

      {empData.map((itemCurrent) => {
        return (
          <Card
            style={{
              width: "18rem",
              display: "inline-block",
              margin: "auto",
              textAlign: "center",
            }}
          >
            <Card.Title>Mentors </Card.Title>
            <Card.Body>
              <Card.Header>{itemCurrent.name} </Card.Header>
              <Card.Img variant="top" src={itemCurrent.img} />

              <Card.Text>{itemCurrent.desc}</Card.Text>
              <Button variant="primary">More Details</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default EmpDetail;
