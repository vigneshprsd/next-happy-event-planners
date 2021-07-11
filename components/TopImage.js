import React from "react";

const TopImage = (props) => {
  return (
    <div class="ttm-page-title-row text-center">
      <div class="title-box text-center">
        <div class="container">
          <div class="page-title-heading">
            <h1 class="title">{props.title}</h1>
            <p class="ttm-textcolor-white">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopImage;
