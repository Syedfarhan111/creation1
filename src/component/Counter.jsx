import React, { useState } from "react";
import { Button, Row, Col, Card, Form, Image } from "react-bootstrap";
import { employeeReducer } from "../reducers/employeeReducer";
import "../component/Counter.css";

export const Detail = () => {
  const { firstname, Lastname, LineNo1, LineNo2, cityName, country } =
    employeeReducer.Data[0];
  const [fname, setfname] = useState(firstname);
  const [Lname, setLname] = useState(Lastname);
  const [Line1, setLine1] = useState(LineNo1);
  const [Line2, setLine2] = useState(LineNo2);
  const [City, setCity] = useState(cityName);
  const [Country, setCountry] = useState(country);
  const [bulp, setbulp] = useState("off");

  return (
    <div>
      <Row>
        <Col xs="2"></Col>
        <Col xs={4}>
          <Card id="abc">
            <Col>
              <Row className={bulp === "off" ? "col1" : "change"}>
                <Form>
                  <Form.Label>First Name:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Fisrt Nmae"
                    onChange={(e) => setfname(e.target.value)}
                    value={fname}
                  ></Form.Control>

                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Last Name :</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      onChange={(e) => setLname(e.target.value)}
                      value={Lname}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Label>Last Name:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => setLname(e.target.value)}
                    value={Lname}
                  ></Form.Control>

                  <Form.Label>Address:</Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="Line 1"
                    onChange={(e) => setLine1(e.target.value)}
                    value={Line1}
                  ></Form.Control>

                  <Form.Label>House No:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Line 2"
                    onChange={(e) => setLine2(e.target.value)}
                    value={Line2}
                  ></Form.Control>

                  <Form.Label>Street</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    onChange={(e) => setCity(e.target.value)}
                    value={City}
                  ></Form.Control>

                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Country"
                    onChange={(e) => setCountry(e.target.value)}
                    value={Country}
                  ></Form.Control>

                  <Form.Control
                    type="File"
                    id="img"
                    onChange={(e) => e.target.value}
                    placeholder="Photo"
                  />

                  <Button>Submit</Button>
                </Form>
              </Row>
            </Col>
          </Card>
        </Col>

        <Col xs={4}>
          <br />
          <br />

          <Row className={bulp === "off" ? "col1" : "change"}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="Profilepic.jfif" />

              <Card.Body Class="Cardbody">
                <Card.Text>{`${fname} ${Lname}`}</Card.Text>
                <Card.Text>{`${Line1} ${Line2}`}</Card.Text>
                <Card.Text>{`${City}`}</Card.Text>
                <Card.Text>{`${Country}`}</Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Col>

        <Col xs="2">
          <Image
            src={`bulp${bulp}.jfif`}
            alt="no image"
            width="50px"
            onClick={() => (bulp === "off" ? setbulp("on") : setbulp("off"))}
          ></Image>
        </Col>
      </Row>
    </div>
  );
};
export default Detail;
