import React from "react";
import "./index.scss";

type ContentProps = {
  header: string;
};

const Content = (props: ContentProps) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 content-container">
          <h1>{props.header}</h1>
        </div>
      </div>
    </div>
  );
};

export default Content;
