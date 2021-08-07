import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

export const ToggleComps = () => {
  const [colorName, setcolorName] = useState("Orange");
  return (
    <div>
      <Card>
        <Button
          onClick={() =>
            colorName === "blue" ? setcolorName("Orange") : setcolorName("blue")
          }
        >
          Change Me
        </Button>
        <h3>PickupBiz</h3>
        <p>This is my Containt</p>
        <span style={{ color: colorName }}>
          <h1>PDAC Course</h1>
        </span>
      </Card>
      <Button onClick={() => setcolorName("Blue")}>Blue</Button>
      <Button onClick={() => setcolorName("Green")}>green</Button>
      <Button onClick={() => setcolorName("red")}>red</Button>
      <Button onClick={() => setcolorName("yellow")}>yellow</Button>
    </div>
  );
};
