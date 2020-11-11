import Jumbotron from "react-bootstrap/Jumbotron";
import logo from "../logo1.png";

import "../Home.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Title = (props) => {
  return (
    <div>
      {" "}
      <Jumbotron>
        <Container>
          <Row>
            <Col>
              <img className="image1" src={logo} />
            </Col>
            <Col>
              <h1 className="p">McMaster Book Scholar</h1>
            </Col>
            <Col>
              <img className="image1" src={logo} />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};
export default Title;
