import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/items";
import { NFTDATA } from "../utils/data";
import uuid from "react-uuid";

function NFTCards() {
  const [{ isDragging }, dragRef] = useDrag({
    type: ItemTypes.CARD,

    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div>
      {NFTDATA.map((data) => {
        return (
          <div key={uuid()} className="my-8">
            <img ref={dragRef} src={data.imgURL} alt={data.title} />
          </div>
        );
      })}
    </div>
  );
}

export default NFTCards;
