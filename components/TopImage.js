import React from "react";
import { Container } from "react-bootstrap";

const TopImage = (props) => {
  return (
    <div className="ttm-page-title-row text-center">
      <div className="title-box text-center">
        <Container>
          <div className="page-title-heading">
            <h1 className="title">{props.title}</h1>
            <p className="ttm-textcolor-white">{props.description}</p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default TopImage;
