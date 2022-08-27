import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />{" "}
      {/*Spread operator makes possible to pass all properties without specifying them explicitly*/}
    </div>
  );
});

export default Input;
