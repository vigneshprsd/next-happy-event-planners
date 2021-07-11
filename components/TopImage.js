import React from "react";

const TopImage = (props) => {
  return (
    <div className="ttm-page-title-row text-center">
      <div className="title-box text-center">
        <div className="container">
          <div className="page-title-heading">
            <h1 className="title">{props.title}</h1>
            <p className="ttm-textcolor-white">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopImage;
