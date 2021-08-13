import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import { getAllGroups } from "../State/Selector/getAllGroups";

export const FetchFromReducer = () => {
  const Selector = useSelector(getAllGroups);
  const [data, setData] = useState(Selector);
  return (
    <div>
      {data.map((item) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Title>Hellow Redux--------{item.name}</Card.Title>
            <Card.Body>This is card--------{item.age}</Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
