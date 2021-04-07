import React from "react";

const ClickableImage = (props) => (
  <img src={props.image} name={props.name} onClick={props.onClick} />
);

export default ClickableImage;
