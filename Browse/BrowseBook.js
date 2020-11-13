import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';

class BrowseBook extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="BrowseBook">
        <Card>
          <Card.Img className="bookImg" variant="top" src= {this.props.image}/>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              Author: {this.props.author}
              <hr />
              <p className="price"> {this.props.price} </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
};
  
export default BrowseBook;
