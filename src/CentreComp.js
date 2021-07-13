import React, { Component } from "react";
import {Card,Button} from 'react-bootstrap'; 
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./App.module.css";
class CentreComp extends Component {
    render() {
      return (
          <div className={classes.centre}>
        <Card border="primary" style={{ width: '15rem', margin : "10px", background:"greenyellow"}}>
  <Card.Body>
    <Card.Title><h4>Assignment No.</h4></Card.Title>
    <Card.Text>
      Question Name
    </Card.Text>
    <Button variant="primary">Go to Question</Button>
  </Card.Body>
</Card>
</div>
      );
    }
  }
export default CentreComp;