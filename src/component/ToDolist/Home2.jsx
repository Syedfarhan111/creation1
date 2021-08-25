import React from "react";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
import { AddToDo } from "./AddToDo";
import "bootstrap/dist/css/bootstrap.min.css";

export const Home2 = () => {
  return (
    <Resct.Fregment>
      <Row>
        <Col>
          <AddToDo />
        </Col>
        <Col>
          <ToDoList />
        </Col>
      </Row>
    </Resct.Fregment>
  );
};
