import "../Home.css";
import React from "react";
import { Card } from "react-bootstrap";

const Card1 = (props) => {
  return (
    <div className=" cardcen col d-flex justify-content-center">
      <Card style={{ width: "38rem" }} className="cards ">
        <Card.Body>
          <Card.Title>
            <h4> Who are we ? </h4>
          </Card.Title>

          <Card.Text>
            <h6 className="notbold">
              We are an online used book store based at McMaster University. We
              help facilitate the buying and selling of books at a reasonable
              price for students.
            </h6>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Card1;
