import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/items";

function NFTCards(props) {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,

    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  return (
    <div ref={drag}>
      <img
        key={props.id}
        src={props.cardImg}
        className="rounded-lg cursor-grab "
        alt=""
      />
    </div>
  );
}

export default NFTCards;
