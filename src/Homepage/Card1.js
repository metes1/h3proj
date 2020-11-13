import "../Home.css";
import React from "react";
import { Card } from "react-bootstrap";

const Card1 = (props) => {
  return (
    <div className=" cardcen col d-flex justify-content-center">
      <Card style={{ width: "38rem" }} className="cards ">
        <Card.Body>
          <Card.Title>
            <h3> Who are we ? </h3>
          </Card.Title>

          <Card.Text>
            <h5 className="notbold">
              We are an online used book store based at McMaster University. We
              help facilitate the buying and selling of books at a reasonable
              price for students.
            </h5>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Card1;
