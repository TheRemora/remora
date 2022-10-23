import React from "react";
import { useDroppable } from "@dnd-kit/core";

function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    opacity: isOver ? 1 : 0.5,
    border: "2px solid white",
    width: "50vw",
    height: "50vh",
    margin: "50px 0 50px 128px",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}

export default Droppable;
