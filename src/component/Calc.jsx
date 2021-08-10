import React, { useState, useEffect } from "react";
import { Form, Row } from "react-bootstrap";

const Calc = () => {
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(0);
  const [sum, setSum] = useState(0);
  useEffect(() => {
    setSum(Number(num1) + Number(num2));
  }, [num1, num2]);

  return (
    <div>
      <Row>
        {" "}
        <Form.Control onClick={(e) => setnum1(e.target.value)} />
        <Form.Control onClick={(e) => setnum2(e.target.value)} />
      </Row>
      <h1>{sum}</h1>
    </div>
  );
};
export default Calc;
