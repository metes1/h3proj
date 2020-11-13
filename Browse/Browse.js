import React from 'react';
import "./Browse.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import SortBy from "./../SortBy.js";

class Browse extends React.Component {

  constructor(props) {
    super(props);
    this.state = {list: props.file, sort_term: ""};
  }

  componentDidUpdate(prevProps) {
    if (this.props.file !== prevProps.file) {
      this.setState({list: this.props.file, sort_term:"no"});
    }
  }

  handleSorting = (e) => {
    let option = e.target.value;
    let sortedList = [...this.state.list].sort((a, b) => {
      return (option == "hl" ? (a["price"] >= b["price"] ? -1 : 1) :
        (a["price"] <= b["price"] ? -1 : 1))
    });
    this.setState({list: sortedList, sort_term: "price"});
  }
  

  render(){
    return (
      <div className="Browse">
        <h2>Browse {this.props.subject} Books</h2>

        <div className="browseHeader">
          <p id="results">Results {this.props.file.length} of {this.props.file.length}</p>
          <div className="SortBy">
            <p>Sort By:</p>
            <select onChange={this.handleSorting} className="sortBySelect">
              <option value="" selected disabled hidden></option>
              <option value="lh">Price: Low to High</option>
              <option value="hl">Price: High to Low</option>
              <option value="no">Post: Newest to Oldest</option>
              <option value="on">Post: Oldest to Newest</option>
            </select>
          </div>
        </div>

        <div className="browseBody">
          {this.state.list
            .map(({title,author,price,image}) => 
              <Card className="card" key={image}>
                <Card.Img className="bookImg" variant="top" src= {"/browseImages/" + image}/>
                <Card.Body className="cardBody">
                  <Card.Title id="title">{title}</Card.Title>
                  <Card.Text>
                    <p id="author">Author: {author} </p>
                    <p id="price"> ${price.toFixed(2)} </p>
                  </Card.Text>
                </Card.Body>
              </Card>
          )}
        </div>

        <div className="browseFooter">
          <p>Results {this.props.file.length} of {this.props.file.length}</p>
          <div class="pagination">
            <p>❮</p>
            <p className="active">1</p>
            <p>❯</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Browse;
