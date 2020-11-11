import Image from "react-bootstrap/Image";
import book from "./book.jpg";
import Title from "./Homepage/Title";
import Card1 from "./Homepage/Card1";
import Sell from "./Sell/Sell";

import "./Home.css";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = (props) => {
  return (
    <Router>
      <div className="jumborton">
        <Title />
        <Container fluid>
          <Row>
            <Col xs={2} id="sidebar-wrapper">
              <div>
                <nav className="sidebar">
                  <ul>
                    <li>
                      <Link to="/" className="link">
                        Home
                      </Link>
                    </li>
                    <li>Browse Subject</li>
                    <ul>
                      <li>
                        <Link to="/browse" className="link">
                          Business
                        </Link>
                      </li>
                      <li>
                        <Link to="/browse" className="link">
                          Engineering
                        </Link>
                      </li>
                      <li>
                        <Link to="/browse" className="link">
                          Science
                        </Link>
                      </li>
                      <li>
                        <Link to="/browse" className="link">
                          Health Science
                        </Link>
                      </li>
                      <li>
                        <Link to="/browse" className="link">
                          Humanities
                        </Link>
                      </li>
                      <li>
                        <Link to="/browse" className="link">
                          Social Science
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </nav>
              </div>
            </Col>
            <Col xs={10} id="page-content-wrapper">
              <Switch>
                <Route path="/browse">
                  <p>c</p>{" "}
                </Route>
                <Route path="/sell">
                  <Sell />
                </Route>
                <Route path="/">
                  <div>
                    <Image className="image2" src={book} />
                  </div>
                  <div style={{ clear: "both" }} className="buttonz">
                    <Button variant="warning" size="lg">
                      <h3>&nbsp; Buy &nbsp;</h3>
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/sell" className="link">
                      <Button variant="warning" size="lg">
                        <h3>&nbsp; Sell &nbsp;</h3>
                      </Button>
                    </Link>
                  </div>
                  <Card1 />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};
export default Home;
