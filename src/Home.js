import Image from "react-bootstrap/Image";
import book from "./book.jpg";
import Title from "./Homepage/Title";
import Card1 from "./Homepage/Card1";
import Sell from "./Sell/Sell";
import Search from "./Search/Search";
import Browse from "./Browse/Browse";
import "./Home.css";
import React from "react";
import { Container, Row, Col, Button, Navbar } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
// Files contain data for browse books page
import bdata from "./Browse/data/bdata.json";
import edata from "./Browse/data/edata.json";
import sdata from "./Browse/data/sdata.json";
import hdata from "./Browse/data/hdata.json";
import ssdata from "./Browse/data/ssdata.json";
import hsdata from "./Browse/data/hsdata.json";

const Home = (props) => {
  return (
    <Router>
      <div className="jumborton">
        <Container fluid>
          <Row>
            <Col xs={2} id="sidebar-wrapper">
              <Navbar className="webHeader">
                <Navbar.Brand className="webHeader1"></Navbar.Brand>
              </Navbar>
              <div>
                <nav className="sidebar">
                  <ul>
                    <li>
                      <NavLink
                        to="/"
                        exact
                        className="link"
                        activeStyle={{ color: "red" }}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/search"
                        className="link"
                        activeStyle={{ color: "red" }}
                      >
                        Search
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/sell"
                        className="link"
                        activeStyle={{ color: "red" }}
                      >
                        Sell
                      </NavLink>
                    </li>
                    <li> Browse Subject</li>
                    <div className="inden">
                      <li>
                        <NavLink
                          to="/browse/business"
                          className="link"
                          activeStyle={{ color: "red" }}
                        >
                          Business
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/browse/engineering"
                          className="link"
                          activeStyle={{ color: "red" }}
                        >
                          Engineering
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/browse/science"
                          className="link"
                          activeStyle={{ color: "red" }}
                        >
                          Science
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/browse/healthscience"
                          className="link"
                          activeStyle={{ color: "red" }}
                        >
                          Health Science
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/browse/humanities"
                          className="link"
                          activeStyle={{ color: "red" }}
                        >
                          Humanities
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/browse/socialscience"
                          className="link"
                          activeStyle={{ color: "red" }}
                        >
                          Social Science
                        </NavLink>
                      </li>
                    </div>
                  </ul>
                </nav>
              </div>
            </Col>
            <Col xs={10}>
              <Title />

              <Switch>
                <Route path="/search">
                  <Search />
                </Route>
                <Route path="/browse/business">
                  <Browse subject="Business" file={bdata} />
                </Route>
                <Route path="/browse/engineering">
                  <Browse subject="Engineering" file={edata} />
                </Route>
                <Route path="/browse/science">
                  <Browse subject="Science" file={sdata} />
                </Route>
                <Route path="/browse/healthscience">
                  <Browse subject="Health Science" file={hsdata} />
                </Route>
                <Route path="/browse/humanities">
                  <Browse subject="Humanities" file={hdata} />
                </Route>
                <Route path="/browse/socialscience">
                  <Browse subject="Social Science" file={ssdata} />
                </Route>
                <Route path="/sell">
                  <Sell />
                </Route>
                <Route path="/">
                  <div>
                    <img alt="" src={book} className="image2" />
                  </div>
                  <div style={{ clear: "both" }} className="buttonz">
                    <Link to="/search" className="link">
                      <Button variant="warning" size="md">
                        <h3>&nbsp; Buy &nbsp;</h3>
                      </Button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/sell" className="link">
                      <Button variant="warning" size="md">
                        <h3>&nbsp; Sell &nbsp;</h3>
                      </Button>
                    </Link>
                  </div>
                  <div>
                    <Card1 />
                  </div>
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
