import React from "react";
function LuckyImage(props) {
  return <img src={props.image} name={props.name} onClick={props.onClick} />;
}

export default LuckyImage;
