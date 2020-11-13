import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import logo from "../logo1.png";

import "../Home.css";
import React from "react";

const Title = (props) => {
  return (
    <div>
      <Navbar className="webHeader col d-flex justify-content-center">
        <Navbar.Brand className="webHeader1">
          {" "}
          <br></br>
          <img alt="" src={logo} className="logoClass " />{" "}
          <h1 className="headertitle">McMaster Book Scholar</h1>{" "}
          <img alt="" src={logo} className="logoClass" />
          <br></br>
          <br></br>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Title;
