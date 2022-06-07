import React from "react";
import parse from "html-react-parser";
import "./index.scss";
import Button from "../Button";

type ContentProps = {
  header: string;
  id: number;
  description: string[];
  code: string;
};

const Content = (props: ContentProps) => {
  return (
    <div className="container">
      <div className="row content-row">
        <div className="col-12 col-lg-6 col-md-6 content-header-description">
          <h1 className="content-header">{props.header}</h1>
          <ul>
            { props.description && props.description.map((content, index) => {
              return( 
                <li key={index}>{content}</li> 
              );
            })}
          </ul>
          <div className="code-snippet">
           { parse(props.code) }
          </div>  
        </div>
        <div className="col-12 col-lg-6 col-md-6 button-container">
            <Button label="button" class="transform-rorate-view-button"/>
        </div>
      </div>
    </div>
  );
};

export default Content;
