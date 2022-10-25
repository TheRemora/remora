import React from "react";

function AnimatedButton({ className, buttonName, onClickFunc }) {
  return (
    <button className={className} onClick={onClickFunc}>
      {buttonName}
    </button>
  );
}

export default AnimatedButton;
