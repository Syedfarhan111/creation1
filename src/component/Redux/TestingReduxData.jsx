import React from "react";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import { getAllGroups } from "../State/Selector/getAllGroups";
import { useState } from "react";

const TestingReduxData = () => {
  const selctor = useSelector(getAllGroups);
  const [data, setData] = useState(selctor);
  return (
    <div>
      {data.map((items) => {
        return (
          <div>
            <h1>{items.age}</h1> <h1>{items.name}</h1>
            <h1>{items.Add}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default TestingReduxData;
