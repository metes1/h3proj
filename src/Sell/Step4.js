import React, { useState } from "react";
import { Form, Col, Row, Button, Modal } from "react-bootstrap";
import "./Sell.css";

const Step4 = ({ title, course, desc, author, prof }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="step1">
      <h4>Confirm Information</h4>
      <br></br>
      <Form>
        <Form.Group as={Row} controlId="exampleForm.ControlInput1">
          <Form.Label column sm={2}>
            Title
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder={title} readOnly />
          </Col>
        </Form.Group>
        <br></br>
        <Form.Group as={Row} controlId="exampleForm.ControlInput1">
          <Form.Label column sm={2}>
            Author
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder={author} readOnly />
          </Col>
        </Form.Group>
        <br></br>

        <Form.Group as={Row} controlId="exampleForm.ControlInput1">
          <Form.Label column sm={2}>
            Course
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder={course} readOnly />
          </Col>
        </Form.Group>
        <br></br>

        <Form.Group as={Row} controlId="exampleForm.ControlInput1">
          <Form.Label column sm={3}>
            Professor
          </Form.Label>
          <Col sm={9}>
            <Form.Control type="text" placeholder={prof} readOnly />
          </Col>
        </Form.Group>
        <br></br>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" placeholder={desc} rows={3} readOnly />
        </Form.Group>
        <br></br>
        <div className="button1">
          <Button variant="primary" onClick={handleShow}>
            Confirm
          </Button>
        </div>
      </Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>Congrats your book was posted to be sold!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => (window.location = "/")}>
            Home
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Step4;
