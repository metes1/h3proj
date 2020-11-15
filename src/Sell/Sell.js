import "./Sell.css";
import StepZilla from "react-stepzilla";

import Step4 from "./Step4";
import React, { useState } from "react";

import { Container, Form } from "react-bootstrap";
import "./skeleton.css";

// sell form with timeline
const Sell = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [course, setCourse] = useState("");
  const [prof, setProf] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [titlec, setTitlec] = useState(false);
  const [pricec, setPricec] = useState(false);
  const [authorc, setAuthorc] = useState(false);
  const [count, setCount] = useState(0);

  const handleValidation = (pr, newpr) => {
    setCount(1);
    if (pr === "title") {
      setTitle(newpr);
      if (newpr === "" || title === " ") {
        setTitlec(false);
      } else {
        setTitlec(true);
        console.log(1);
      }
    } else if (pr === "author") {
      setAuthor(newpr);
      if (newpr === "" || author === " ") {
        setAuthorc(false);
      } else {
        setAuthorc(true);
        console.log(2);
      }
    } else if (pr === "price") {
      setPrice(newpr);
      if (newpr === "" || isNaN(+newpr) || price === " ") {
        setPricec(false);
      } else {
        setPricec(true);
        console.log(4);
      }
    }
  };

  const steps = [
    {
      component: (
        <div className="step">
          <Container className="step1">
            <h4>Input Book Title, Author and Price</h4>
            <br></br>
            <Form>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Book Title</Form.Label>
                <Form.Control
                  type="title"
                  onChange={(e) => {
                    handleValidation("title", e.target.value);
                  }}
                  value={title}
                  placeholder="Enter title"
                />
                {titlec || count === 0 ? (
                  ""
                ) : (
                  <p style={{ color: "red" }}>Valid title required</p>
                )}
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    handleValidation("author", e.target.value);
                  }}
                  value={author}
                  type="author"
                  placeholder="Enter author"
                />
                {authorc || count === 0 ? (
                  ""
                ) : (
                  <p style={{ color: "red" }}>Valid author required</p>
                )}
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    handleValidation("price", e.target.value);
                  }}
                  value={price}
                  type="price"
                  placeholder="Enter price"
                />
                {pricec || count === 0 ? (
                  ""
                ) : (
                  <p style={{ color: "red" }}>
                    Valid price required (no symbols or letters)
                  </p>
                )}
              </Form.Group>
            </Form>
          </Container>
        </div>
      ),
    },
    {
      component: (
        <div className="step">
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
        </div>
      ),
    },
    {
      component: (
        <div className="step">
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
        </div>
      ),
    },
    {
      component: (
        <div className="step">
          <Step4
            title={title}
            author={author}
            course={course}
            prof={prof}
            desc={desc}
            price={price}
          />
        </div>
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
        <div>
          <div className="step-progress">
            <StepZilla
              preventEnterSubmission={true}
              stepsNavigation={false}
              steps={steps}
              showNavigation={pricec && titlec && authorc}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sell;
