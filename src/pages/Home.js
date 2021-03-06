import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Home(props) {
  var user = props.userData;
  return (
    <Card.Body>
      <div className="text-center">
        <h6>Home</h6>
        <br />
        {/* shows user name from the props(userData) passed from App */}
        <h3>{`Hi, ${user.name}!`}</h3>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          vulputate vestibulum lobortis.
        </Card.Text>
        <hr />
        <p>{`Email Address: ${user.email}`}</p>
      </div>
      <div className="text-center">
        <Button className="primary" onClick={props.onLogoutPressed}>
          Logout
        </Button>
      </div>
    </Card.Body>
  );
}
