import React from "react";

export default function Square(props) {
  const style = {
    color: props.value === "O" ? "blue" : "red",
  };
  return (
    <button style={style} className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
