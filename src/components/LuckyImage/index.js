import React from "react";
function ClickableImage(props) {
  return <img src={props.image} name={props.name} onClick={props.onClick} />;
}

export default ClickableImage;
