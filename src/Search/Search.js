import React from 'react';
import './Search.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, Col} from 'react-bootstrap';
import SearchResult from './SearchResult.js';

//Render page nav only when there's at least one search result
function PageNav(props) {
  if (!props.showPageNav) {
    return null;
  }
  return (
    <div class="footer">
      <p>Results 1 of 1</p>
      <div class="pagination">
        <p>❮</p>
        <p className="active">1</p>
        <p>❯</p>
      </div>
    </div>
  );
}

//Render number of results text and Sort By dropdown only when there's at least one search result
function ResultBar(props) {
  if (!props.showResultBar) {
    return null;
  }
  return (
    <div className="resultHeader">
      <p id="results">Results 1 of 1</p>
      <div className="SortBy">
        <p>Sort By:</p>
        <select className="sortBySelect">
          <option value="no">Post: Newest to Oldest</option>
          <option value="on">Post: Oldest to Newest</option>
          <option value="lh">Price: Low to High</option>
          <option value="hl">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}

//Render searched for: text only when a search has been made
function SearchedFor(props) {
  if (!props.showSearchFor) {
    return null;
  }

  var searchString = "";
  if (props.titleS) searchString = `${searchString} Title: "${props.titleS}"`;
  if (props.authorS) searchString = `${searchString} Author: "${props.authorS}"`;
  if (props.courseS) searchString = `${searchString} Course: "${props.courseS}"`;
  if (props.profS) searchString = `${searchString} Professor: "${props.profS}"`;

  return (
    <div className="searchedFor">
      <div className="searchedForText">
        <p>You searched for - {searchString}</p> 
        <span onClick = {() => props.editSearch()}>> Edit search</span>
      </div>
      <hr />
    </div>
  );
}

//Render when there are no results for the search
function NoResults() {
  return (
    <div>
      <p>No results found.</p>
    </div>
  );
}

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {presults: "", showPageNav: false, showSearchFor: false,
                  titleIn: "", authorIn: "", courseIn: "", profIn: "",
                  titleS: "", authorS: "", courseS: "", profS: ""
                };
  }


  searchHandler(event){
    //if search matches the one book that is in data (since this is a prototype), show the result
    if (this.state.titleIn.toLowerCase() === "algorithm design" ||
        this.state.authorIn.toLowerCase() === "jon kleinberg" ||
        this.state.authorIn.toLowerCase() === "eva tardos" ||
        this.state.courseIn.toLowerCase() === "compsci 3ac3" ||
        this.state.profIn.toLowerCase() === "george karakostas") {
      this.setState({results: "AlgBook", showPageNav: true, showSearchFor: true,
                     titleIn: "", authorIn: "", courseIn: "", profIn: "",
                     titleS: this.state.titleIn, authorS: this.state.authorIn,
                     courseS: this.state.courseIn, profS: this.state.profIn});
    //if all input fields are empty, search button does nothing
    } else if (!this.state.titleIn && !this.state.authorIn && !this.state.courseIn && !this.state.profIn) {
      this.setState({results: "", showPageNav: false, showSearchFor: false,
                     titleIn: "", authorIn: "", courseIn: "", profIn: "",
                     titleS: this.state.titleIn, authorS: this.state.authorIn,
                    courseS: this.state.courseIn, profS: this.state.profIn});
    //else any other search, there's no results found
    } else {
      this.setState({results: "None", showPageNav: false, showSearchFor: true,
                     titleIn: "", authorIn: "", courseIn: "", profIn: "",
                     titleS: this.state.titleIn, authorS: this.state.authorIn,
                     courseS: this.state.courseIn, profS: this.state.profIn});
    }
    event.preventDefault();
  }

  //All the functions below change states of search inputs
  titleSearch(event) {
    this.setState({titleIn: event.target.value});
  }

  authorSearch(event) {
    this.setState({authorIn: event.target.value});
  }

  courseSearch(event) {
    this.setState({courseIn: event.target.value});
  }

  profSearch(event) {
    this.setState({profIn: event.target.value});
  }

  editSearch() {
    this.setState({titleIn: this.state.titleS, authorIn: this.state.authorS,
                   courseIn: this.state.courseS, profIn: this.state.profS,});
  }

  render(){
    var renderResults;
    if (this.state.results === "AlgBook") renderResults = <SearchResult />
    else if (this.state.results === "None") renderResults = <NoResults />
    else renderResults = null;

    return (
      <div className="Search">
        <div className="searchBar">
          <Form onSubmit={this.searchHandler.bind(this)}>
            <Form.Row>
              <Col>
                <Form.Label>Title</Form.Label>
                <Form.Control className="inputBox" 
                              placeholder="Enter book title..."
                              type="text" 
                              onChange={this.titleSearch.bind(this)}
                              value={this.state.titleIn}
                />
              </Col>
              <Col>
                <Form.Label>Author</Form.Label>
                <Form.Control className="inputBox"
                              placeholder="Enter author..."
                              type="text" 
                              onChange={this.authorSearch.bind(this)}
                              value={this.state.authorIn}
                />
              </Col>
              <Col>
                <Form.Label>Course</Form.Label>
                <Form.Control className="inputBox"
                              placeholder="Enter course code..."
                              type="text" 
                              onChange={this.courseSearch.bind(this)}
                              value={this.state.courseIn}
                />
              </Col>
              <Col>
                <Form.Label>Professor</Form.Label>
                <Form.Control className="inputBox"
                              placeholder="Enter professor name..."
                              type="text" 
                              onChange={this.profSearch.bind(this)}
                              value={this.state.profIn}
                />
              </Col>
              <Col>
                <Button id="searchBtn" variant="warning" type="submit">Search</Button>
              </Col>
            </Form.Row>
            </Form>
          <p id="searchInfo">Please enter at least one of Title, Author, Course, or Professor.</p>
        </div>

        <div className="resultsMain">
          <SearchedFor editSearch={this.editSearch.bind(this)} showSearchFor={this.state.showSearchFor}
                       titleS={this.state.titleS} authorS={this.state.authorS}
                       courseS={this.state.courseS} profS={this.state.profS} />
        
          <ResultBar showResultBar={this.state.showPageNav} />

          <div className="resultsBody">
            {renderResults}
          </div>
          <PageNav showPageNav={this.state.showPageNav} />
        </div>
      </div>
    );
  }
};

export default Search;
