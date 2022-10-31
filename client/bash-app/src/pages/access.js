import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from 'react-bootstrap/Card';
import PcIcon from "../img/pc_icon.png"



export const Access = () => {
  const { store, actions } = useContext(Context);


  return (
    <div className="container">
      <Card >
        <h1>test</h1>
        <h1>{store.spot.id}</h1>
        <Card.Img variant="top" src={PcIcon} alt="computer icon" style={{ width: '100px', }} />
        <Card.Body>
          <Card.Title>{store.spot.name}</Card.Title>
          <Card.Text>
            {store.spot.path}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}