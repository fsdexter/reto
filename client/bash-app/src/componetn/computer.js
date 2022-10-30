import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Context } from "../store/appContext";
import PcIcon from "../img/pc_icon.png"


function ComputerCard() {
  const { store, actions } = useContext(Context);


  return (
    <Card >
      <Card.Img variant="top" src={PcIcon} alt="computer icon" style={{ width: '100px', }}/>
      <Card.Body>
        <Card.Title>TEST</Card.Title>
        <Card.Text>
          TEST
        </Card.Text>
        <Button variant="primary">TEST</Button>
      </Card.Body>
    </Card>
  );
}

export default ComputerCard;