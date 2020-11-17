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

function NoWarning() {
  return (
    <div>
      <p id="searchInfo">Please enter at least one of Title, Author, Course, or Professor.</p>
    </div>
  );
}

function Warning() {
  return (
    <div>
      <p id="searchWarning">Please enter at least one of Title, Author, Course, or Professor.</p>
    </div>
  );
}

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {warning: false, results: "", showPageNav: false, showSearchFor: false,
                  titleIn: "", authorIn: "", courseIn: "", profIn: "",
                  titleS: "", authorS: "", courseS: "", profS: ""
                };
  }

  //only checks match for the single book that's hard coded in
  searchHandler(event){
    //if all input fields are empty (blank space string), search button does nothing
    if (!this.state.titleIn.trim() && !this.state.authorIn.trim() && !this.state.courseIn.trim() && !this.state.profIn.trim()) {
      this.setState({warning: true, titleIn: "", authorIn: "", courseIn: "", profIn: ""});
    } else { //else check if the search inputs have any matches
      var titleMatch;
      var authorMatch;
      var courseMatch;
      var profMatch;

      if (this.state.titleIn.trim()) { //only check input match if the input isn't empty (only spaces are included as a null string as well)
        if ("algorithm design".includes(this.state.titleIn.toLowerCase())) { //
          titleMatch = true;
        } else {titleMatch = false;} //if input doesn't match then there will be no
      }  else {titleMatch = true;}

      if (this.state.authorIn.trim()) {
        if ("jon kleinberg".includes(this.state.authorIn.toLowerCase()) || "eva tardos".includes(this.state.authorIn.toLowerCase())) {
          authorMatch = true;
        } else {authorMatch = false;}
      } else {authorMatch = true;}

      if (this.state.courseIn.trim()) {
        if ("compsci 3ac3".includes(this.state.courseIn.toLowerCase())) {
          courseMatch = true;
        } else {courseMatch = false;}
      } else {courseMatch = true;}

      if (this.state.profIn.trim()) {
        if ("george karakostas".includes(this.state.profIn.toLowerCase())) {
          profMatch = true;
        } else {profMatch = false;}
      } else {profMatch = true;}

      if (titleMatch && authorMatch && courseMatch && profMatch) { //All inputs must match for the result to show, empty categories are marked as true.
        this.setState({warning: false, results: "AlgBook", showPageNav: true, showSearchFor: true,
                     titleIn: "", authorIn: "", courseIn: "", profIn: "",
                     titleS: this.state.titleIn.trim(), authorS: this.state.authorIn.trim(),
                     courseS: this.state.courseIn.trim(), profS: this.state.profIn.trim()});
      } else { //No search found
        this.setState({warning: false, results: "None", showPageNav: false, showSearchFor: true,
                     titleIn: "", authorIn: "", courseIn: "", profIn: "",
                     titleS: this.state.titleIn.trim(), authorS: this.state.authorIn.trim(),
                     courseS: this.state.courseIn.trim(), profS: this.state.profIn.trim()});
      }
    }
    event.preventDefault();
  };

  //All the functions below change states of search inputs
  titleSearch(event) {
    this.setState({titleIn: event.target.value, warning: false});
  }

  authorSearch(event) {
    this.setState({authorIn: event.target.value, warning: false});
  }

  courseSearch(event) {
    this.setState({courseIn: event.target.value, warning: false});
  }

  profSearch(event) {
    this.setState({profIn: event.target.value, warning: false});
  }

  editSearch() {
    this.setState({titleIn: this.state.titleS, authorIn: this.state.authorS,
                   courseIn: this.state.courseS, profIn: this.state.profS, warning: false});
  }

  render(){
    var renderResults;
    if (this.state.results === "AlgBook") renderResults = <SearchResult />
    else if (this.state.results === "None") renderResults = <NoResults />
    else renderResults = null;

    var renderWarning;
    if (this.state.warning === false) renderWarning = <NoWarning />
    if (this.state.warning === true) renderWarning = <Warning />

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
          {renderWarning}
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
