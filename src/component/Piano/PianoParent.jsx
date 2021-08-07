import React from "react";
import { Col, Row } from "react-bootstrap";
// import "../component/PianoChail";
import { PianoChail } from "./PianoChail";

export const PianoParent = () => {
  return (
    <div>
      <Row>
          
        <Col>
          <Row>
            <h1>Piano Small</h1>
            <PianoChail />
          </Row>
        </Col>
        <Col>
          <h1>Piano medium</h1> <PianoChail />
        </Col>
        <Col>
          <h1>Piano Large</h1> <PianoChail />
        </Col>
        
      </Row>
    </div>
  );
};
