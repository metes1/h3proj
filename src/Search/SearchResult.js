import React from 'react';
import './SearchResult.css';
import AlgBook from "./images/algorithmDesign.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal} from 'react-bootstrap';

//Render when there are no results for the search
function PurchasedMsg() {
  return (
    <div className="purchaseMsg">
      <Modal.Body>
        <h6>Purchase Complete!</h6>
      </Modal.Body>
    </div>
  );
}

function OrderMsg() {
  return (
    <div className="orderMSg">
      <div className="orderInfoBox">
        <Modal.Body className="checkoutBodyH">
          Order
        </Modal.Body>
        <Modal.Body className="checkoutBody">
          <div className="checkOrder">
            <img id="orderImg" src={AlgBook} alt="Algorithm Design"/>
            <div className="orderText">
              <p id="orderTitle">Algorithm Design</p> 
              <p id="orderAuthor">Author: Jon Kleinberg; Eva Tardos</p>
            </div>
        </div>
        </Modal.Body>
        <Modal.Body className="checkoutBodyT">
          <b id="orderTotal">Total:</b><p id="orderPrice">$70.00</p>
          </Modal.Body>
        </div>
    </div>
  );
}

//One search result is hard-coded into this component
class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: false, completeMsg: false, confirmBtn: false, confirmBtnTxt: "Complete Purchase", cancelBtnTxt: "Cancel"};
  }

  handleShow() {
    this.setState({show: true});
  }

  handleClose() {
    this.setState({show: false});
    if (this.state.cancelBtnTxt === "Close") {
      (window.location = "/search");
    }
  }

  confirmPurchase() {
    this.setState({completeMsg: true, confirmBtn: true, confirmBtnTxt: "Purchased!", cancelBtnTxt: "Close"});
  }

  render(){
    var modalRender;
    if (this.state.completeMsg === false) modalRender = <OrderMsg />
    else if (this.state.completeMsg === true) modalRender = <PurchasedMsg />

    return (
      <div className="SearchResult">
        <img id="img1" src={AlgBook} alt="Algorithm Design"/>

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
          <Button id="buyBtn" variant="danger" disabled={this.state.buyBtn} onClick={this.handleShow.bind(this)} >Buy</Button>
        </div>

         <Modal
            show={this.state.show}
            onHide={this.handleClose.bind(this)}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header id="checkoutHeader" closeButton>
              <h5 id="checkoutTitle">Checkout</h5>
            </Modal.Header>
            {modalRender}
            <Modal.Footer id="checkoutFooter">
              <Button id="cancelBtn" variant="secondary" onClick={this.handleClose.bind(this)}>
               {this.state.cancelBtnTxt}
              </Button>
              <Button id="payBtn" variant="primary" type="submit" disabled={this.state.confirmBtn} onClick={this.confirmPurchase.bind(this)}>{this.state.confirmBtnTxt}</Button>
            </Modal.Footer>
          </Modal>
      </div>
    );
   }
};

export default SearchResult;
