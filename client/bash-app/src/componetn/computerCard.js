import React, { useContext } from "react";
import Card from 'react-bootstrap/Card';
import { Context } from "../store/appContext";
import PcIcon from "../img/pc_icon.png"
import { useNavigate } from "react-router-dom";



function ComputerCard(props) {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();

  return (
    <div className="container justify-content-center">
      <Card >
        <Card.Img className="App" variant="top" src={PcIcon} alt="computer icon" style={{ width: '100px', }}/>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.path}
          </Card.Text>
          <button 
            type="button"
            className="btn btn-warning"
            onClick={() => {
              actions.access(props.id, props.index);
              navigate("/access")
            }}
          >Access</button>
        </Card.Body>
      </Card>

    </div>
  );
}

export default ComputerCard;