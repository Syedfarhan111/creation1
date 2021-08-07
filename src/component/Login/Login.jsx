import React, { useEffect, useState } from "react";
import { Col, Row, Form, Card, Button } from "react-bootstrap";
import { userData } from "./Config";
import "./Login.css";
import "./Config";

export const Login = () => {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [isvalid, setIsvalid] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (userName.length >= 5 && password.length >= 6) {
      setIsvalid(false);
      if (
        userData.UserName === userName.trim() &&
        userData.Password === password.trim()
      ) {
        setIsSuccess(true);
      }
    } else setIsvalid(true);
  }, [userName, password]);
  return (
    <div>
      {isSuccess ? (
        <p>You are Successfully Logged In!!!</p>
      ) : (
        <Card className="Login">
          <Row>
            <Col md={10}>
              <Form.Control
                type="text"
                onChange={(e) => setuserName(e.target.value)}
                placeholder="User Name"
              ></Form.Control>
            </Col>
            <Col md={10}>
              <Form.Control
                Type="Password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Button disabled={isvalid}>Submit</Button>
            </Col>
            <Col md={6}>
              <Button>Cancel</Button>
            </Col>
          </Row>
          {!isSuccess && !isvalid && (
            <p>please enter correct user name or password</p>
          )}
        </Card>
      )}
    </div>
  );
};
