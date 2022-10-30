import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Context } from "../store/appContext";
import PcIcon from "../img/pc_icon.png"


function ComputerCard(props) {
  const { store, actions } = useContext(Context);


  return (
    <Card >
      <Card.Img variant="top" src={PcIcon} alt="computer icon" style={{ width: '100px', }}/>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.path}
        </Card.Text>
        <Button variant="primary">TEST</Button>
      </Card.Body>
    </Card>
  );
}

export default ComputerCard;