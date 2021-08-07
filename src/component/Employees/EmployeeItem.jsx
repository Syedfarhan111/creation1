import React from "react";
import { Card } from "react-bootstrap";

export const EmployeeItem = ({ itemData }) => {
  return (
    <Card className="employeeItem">
      <h4> Employee Item</h4>
      <Card.Img
        className="image"
        src={itemData.image}
        height="100px"
        width="10px"
      />

      <span>Name:{`${itemData.firstname} ${itemData.lastname}`}</span>
      <span>City:{`${itemData.City}`}</span>
      <span>Departmentid:{`${itemData.firstname}`}</span>
      <span>DepartmentNmae:{`${itemData.DepartmentNmae}`}</span>
      <span>designation:{`${itemData.designation}`}</span>
    </Card>
  );
};
