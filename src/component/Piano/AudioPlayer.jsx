import React from "react";
import { Button, Col, Row, Card } from "react-bootstrap";
import "./AudioPlayer.css";

export const AudioPlayer = () => {
  const suno = new Audio("mp3/Alan Walker.mp3");
  const handleAudioPlay = () => {
    suno.play();
  };
  const handleAudioPause = () => {
    suno.pause();
  };
  return (
    <Card className="player">
      <Row>
        <Col></Col>
        <Col>
          <Button id="button." onClick={handleAudioPlay}>
            Play
          </Button>
        </Col>
        <Col>
          <Button onClick={handleAudioPause}>pause</Button>
        </Col>
        <Col>
          <Button onMouseDown={handleAudioPlay} onMouseUp={handleAudioPause}>
            Piano
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </Card>
  );
};
