import React from 'react';
import { useDrag } from 'react-dnd';

// import { NFTDATA } from "../utils/data";

function NFTCards({ index, id, imgURL, title, className }) {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'image',
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div className="space-y-2 my-8 mx-2 p-4 ">
      <ul index={index}>
        <li ref={dragRef} className={isDragging ? 'border-2 ' : 'border-0 '}>
          <img
            className="rounded-lg text-center w-full h-80 bg-cover  object-cover"
            src={imgURL}
            alt={title}
          />
        </li>
      </ul>
    </div>
  );
}

export default NFTCards;
