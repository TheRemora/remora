import React from "react";
import { useDrag } from "react-dnd";

// import { NFTDATA } from "../utils/data";

function NFTCards(props) {
  const [{ isDragging }, dragRef] = useDrag({
    type: "image",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <ul index={props.index}>
      <li ref={dragRef} className={isDragging ? "border-2 " : "border-0   "}>
        <img
          className=" text-center w-full h-80 bg-cover  object-cover  "
          src={props.imgURL}
          alt={props.title}
        />
      </li>
    </ul>
  );
}

export default NFTCards;
