import React from 'react';
import './SearchResult.css';
import AlgBook from "./images/algorithmDesign.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

//One search result is hard-coded into this component
class SearchResult extends React.Component {
  render(){
    return (
      <div className="SearchResult">
        <img src={AlgBook} alt="Algorithm Design"/>

        <div className="bookMain">
          <h6>Algorithm Design</h6>
          <p>Author: Jon Kleinberg; Eva Tardos</p>
          <p>Course: COMPSCI 3AC3</p>
          <p>Professor: Dr. George Karakostas</p>
          <br/>
          <p>Textbook is in mint condition. No markings or highlighting on any pages.
             This textbook is the paperback edition.
          </p>
        </div>

        <div className="bookSide">
          <h6>$70.00</h6>
          <p>Condition - Like New</p>
          <br/> <br/>
          <Button id="buyBtn" variant="danger">Buy</Button>
        </div>
      </div>
    );
   }
};

export default SearchResult;
