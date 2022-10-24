import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../utils/items";

function Dropabble() {
  const [{ isOver }, dropRef] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => console.log(item, monitor),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div>
      <h1 className="text-white ml-32 mt-24 text-4xl">Drop here NFT to Mint</h1>
      {/* Drag and Drop */}
      <div
        ref={dropRef}
        className={
          isOver
            ? "w-[50vw] h-[50vh] bg-slate-100 my-16 ml-32"
            : "w-[50vw] h-[50vh] bg-slate-400 my-16 ml-32"
        }
      ></div>
      <button
        onClick={() => {
          alert("Minted");
        }}
        className="ml-32 px-8 py-4 rounded-lg bg-black"
      >
        Mint
      </button>
    </div>
  );
}

export default Dropabble;
