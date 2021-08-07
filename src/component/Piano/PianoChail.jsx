import React from "react";
import { Button } from "react-bootstrap";
import "./Piano.css";

export const PianoChail = () => {
  const handleAudioPlay = (value) => {
    const suno = new Audio(`mp3/${value}.mp3`);
    suno.play();
  };
  document.addEventListener("keydown", (e) => {
    if (e.key === "a" &&  handleAudioPlay("A"));
    if (e.key === "s" &&  handleAudioPlay("Ab"));
    if (e.key === "d" &&  handleAudioPlay("B"));
    if (e.key === "f" &&  handleAudioPlay("A"));
    if (e.key === "j" &&  handleAudioPlay("Bb"));
    if (e.key === "k" &&  handleAudioPlay("C"));
    if (e.key === "l" &&  handleAudioPlay("D"));
    if (e.key === "A" &&  handleAudioPlay("Db"));
    if (e.key === "S" &&  handleAudioPlay("E"));
    if (e.key === "D" &&  handleAudioPlay("EB"));
    if (e.key === "F" &&  handleAudioPlay("G"));
  });
  return (                                                                                           
    <div className="Button">
      <Button variant="outline-dark" onMouseOver={() => handleAudioPlay("A")}>
        sa
      </Button>
      <Button variant="outline-dark" onMouseOver={() => handleAudioPlay("Ab")}>
        Ra
      </Button>
      <Button variant="outline-dark" onMouseOver={() => handleAudioPlay("B")}>
        Ga
      </Button>
      <Button variant="outline-dark" onMouseOver={() => handleAudioPlay("Bb")}>
        Ma
      </Button>
      <Button variant="outline-dark" onMouseOver={() => handleAudioPlay("C")}>
        Pa
      </Button>
      <Button variant="outline-dark" onMouseOver={() => handleAudioPlay("D")}>
        Da
      </Button>
      <Button variant="outline-dark" onMouseOver={() => handleAudioPlay("Db")}>
        NI
      </Button>
    </div>
  );
};
