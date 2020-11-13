import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap';
import logo from "../logo1.png";

import "../Home.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Title = (props) => {
  return (
    <div>
      <Navbar className="webHeader">
        <Navbar.Brand className="webHeader1">
          <img
            alt=""
            src={logo}
            className="logoClass"
          />{' '}
          McMaster Book Scholar
          {' '}
          <img
            alt=""
            src={logo}
            className="logoClass"
          />
        </Navbar.Brand>
      </Navbar>
     
    </div>
  );
};

export default Title;
