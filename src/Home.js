import Image from "react-bootstrap/Image";
import book from "./book.jpg";
import Title from "./Homepage/Title";
import Card1 from "./Homepage/Card1";
import Sell from "./Sell/Sell";
import Search from "./Search/Search";
import Browse from "./Browse/Browse";
import "./Home.css";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
                    <li>
                      <Link to="/search" className="link">
                        Search
                      </Link>
                    </li>
                    <li>
                      <Link to="/sell" className="link">
                        Sell
                      </Link>
                    </li>
                    <li>Browse Subject</li>
                    <ul>
                      <li>
                        <Link to="/browse/business" className="link">
                          Business
                        </Link>
                      </li>
                      <li>
                        <Link to="/browse/engineering" className="link">
                          Engineering
                        </Link>
                      </li>
                      <li>
                        <Link to="/browse/science" className="link">
                          Science
                        </Link>
                      </li>
                      <li>
                        <Link to="/browse/healthscience" className="link">
                          Health Science
                        </Link>
                      </li>
                      <li>
                        <Link to="/browse/humanities" className="link">
                          Humanities
                        </Link>
                      </li>
                      <li>
                        <Link to="/browse/socialscience" className="link">
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
                <Route path="/search">
                  <Search />
                </Route>
                <Route path="/browse/business">
                  <Browse subject="Business" file={bdata}/>
                </Route>
                <Route path="/browse/engineering">
                  <Browse subject="Engineering" file={edata}/>
                </Route>
                <Route path="/browse/science">
                  <Browse subject="Science" file={sdata}/>
                </Route>
                <Route path="/browse/healthscience">
                  <Browse subject="Health Science" file={hsdata}/>
                </Route>
                <Route path="/browse/humanities">
                  <Browse subject="Humanities" file={hdata}/>
                </Route>
                <Route path="/browse/socialscience">
                  <Browse subject="Social Science" file={ssdata}/>
                </Route>
                <Route path="/sell">
                  <Sell />
                </Route>
                <Route path="/">
                  <div>
                    <Image className="image2" src={book} />
                  </div>
                  <div style={{ clear: "both" }} className="buttonz">
                    <Link to="/search" className="link">
                      <Button variant="warning" size="lg">
                        <h3>&nbsp; Buy &nbsp;</h3>
                      </Button>
                    </Link>
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
