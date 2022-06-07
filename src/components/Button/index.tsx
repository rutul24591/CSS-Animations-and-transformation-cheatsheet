import React from "react";
import "./index.scss";

type ButtonProps = {
  label: string;
  class: string;
};

const Button = (props: ButtonProps) => {
  return (
    
    <button
      className={props.class}
      type="button"
      onClick={() => {
        // eslint-disable-next-line no-console
        console.log("Button clicked");
      }}
    >
      {props.label}
    </button>
  );
};

export default Button;
