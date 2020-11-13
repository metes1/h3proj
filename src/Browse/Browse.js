import React from 'react';
import "./Browse.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';

class Browse extends React.Component {

  constructor(props) {
    super(props);
    //keeps track of what the sort by selected option is
    this.state = {sortTerm: "no"};
  }

  //changes state of sortTerm when user selects a different sort by option
  handleSorting = (e) => {
    var option = e.target.value;
    this.setState({sortTerm: option});    
  }

  //sorts the list of books based on the selected sort by option
  sortList(list) {
    if (this.state.sortTerm === "no") { //sort by newest to oldest post
      return list;
    } else if (this.state.sortTerm === "on") { //sort by oldest to newest post
      return list.reverse();
    } else if (this.state.sortTerm === "lh") { //sort by lowest to highest price
      let sortedList = [...list].sort((a, b) => (a.price > b.price) ? 1 : -1);
      return sortedList;
    } else if (this.state.sortTerm === "hl") { //sort by highest to lowest price
      let sortedList = [...list].sort((a, b) => (a.price < b.price) ? 1 : -1);
      return sortedList;
    }
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
              <option value="no">Post: Newest to Oldest</option>
              <option value="on">Post: Oldest to Newest</option>
              <option value="lh">Price: Low to High</option>
              <option value="hl">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="browseBody">
          {this.sortList(this.props.file)
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
