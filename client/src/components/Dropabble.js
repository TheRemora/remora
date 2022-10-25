import React from "react";
import { useDrop } from "react-dnd";
import AnimatedButton from "../widgets/buttons";

function Dropabble() {
  const [{ isOver }, dropRef] = useDrop({
    accept: "image",

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
            ? "w-[50vw] h-[50vh] my-16 ml-32 border-dashed border-8 border-green-500 border-spacing-4"
            : "w-[50vw] h-[50vh]   my-16 ml-32 border-dashed border-8  border-spacing-4"
        }
      ></div>
      <AnimatedButton
        onClickFunc={() => alert("Minted")}
        className="relative bg-background text-2xl px-6 py-2 border-2 border-[#14E2B2] hover:text-black hover:bg-[#14E2B2] hover:transition-all  rounded ml-32 my-6"
        buttonName="Mint"
      />
    </div>
  );
}

export default Dropabble;
