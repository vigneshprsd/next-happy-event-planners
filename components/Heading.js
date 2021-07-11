import React from "react";

const Heading = (props) => {
  return (
    <>
        <div class=" section-title clearfix">
          <h4 className="text-center">{props.subtitle}</h4>
          <h2 className="text-center">{props.title}</h2>
        </div>
    </>
  );
};

export default Heading;
