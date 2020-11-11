import "./Sell.css";
import MultiStep from "react-multistep";

import Step4 from "./Step4";
import React, { useState } from "react";

import { Container, Form } from "react-bootstrap";
import ReactDOM from "react-dom";
import "./skeleton.css";

const prevStyle = { background: "#f0c8c8", "border-width": "2px" };
const nextStyle = { background: "#f0c8c8", "border-width": "2px" };

const Sell = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [course, setCourse] = useState("");
  const [prof, setProf] = useState("");
  const [desc, setDesc] = useState("");

  const steps = [
    {
      component: (
        <Container className="step1">
          <h4>Input Book Title and Author</h4>
          <br></br>
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Book Title</Form.Label>
              <Form.Control
                type="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder="Enter title"
              />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Author</Form.Label>
              <Form.Control
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
                type="author"
                placeholder="Enter author"
              />
            </Form.Group>
          </Form>
        </Container>
      ),
    },
    {
      component: (
        <Container className="step1">
          <h4>Input Course and/or Professor</h4>
          <br></br>
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Course</Form.Label>
              <Form.Control
                type="title"
                onChange={(e) => setCourse(e.target.value)}
                value={course}
                placeholder="Enter course ex.. CompSci 1XA3"
              />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Professor</Form.Label>
              <Form.Control
                type="author"
                onChange={(e) => setProf(e.target.value)}
                value={prof}
                placeholder="Enter professor"
              />
            </Form.Group>
          </Form>
        </Container>
      ),
    },
    {
      component: (
        <Container className="step1">
          <h4>Enter Book Description</h4>
          <br></br>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
                as="textarea"
                rows={3}
              />
            </Form.Group>
          </Form>
        </Container>
      ),
    },
    {
      component: (
        <Step4
          title={title}
          author={author}
          course={course}
          prof={prof}
          desc={desc}
        />
      ),
    },
  ];
  return (
    <div>
      <div className="title">
        <h2>Sell Used Book</h2>
      </div>
      <div style={{ clear: "both" }}>
        <hr></hr>
        <div className="step">
          <div>
            <MultiStep
              prevStyle={prevStyle}
              nextStyle={nextStyle}
              steps={steps}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sell;
