import React, { useState, useEffect } from "react";
import { Card, Col, Row, Form } from "react-bootstrap";
import "./Employee.css";
import { EmployeeItem } from "./EmployeeItem";
import { Learn } from "../../reducers/CardTask";

export const EmployeeList = () => {
  const [empArr, setEmpArr] = useState(Learn.Contain);
  const [SearchText, setSearchText] = useState("");
  useEffect(() => {
    const filterArr = empArr.filter(
      (item) =>
        item.firstname.toLowerCase().includes(SearchText.toLowerCase()) ||
        item.lastname.toLowerCase().includes(SearchText.toLowerCase()) ||
        item.City.toLowerCase().includes(SearchText.toLowerCase())
    );
    if (SearchText === "") setEmpArr(Learn.Contain);
    else setEmpArr(filterArr);
  }, [SearchText]);

  return (
    <Card className="employeelist">
      <h2>Employee list</h2>
      <Form.Control
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
      ></Form.Control>

      <Row>
        {empArr.map((item) => (
          <Col md={4}>
            <EmployeeItem itemData={item} />
          </Col>
        ))}
      </Row>
    </Card>
  );
};
