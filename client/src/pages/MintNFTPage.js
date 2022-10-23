import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { DndContext } from "@dnd-kit/core";

import Droppable from "../components/Droppable";

function MintNFTPage() {
  const [parent, setParent] = useState(null);
  let draggable;
  function handleDragEnd({ over }) {
    setParent(over ? over.id : null);
  }
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="h-screen">
        <Sidebar />
      </div>
      {/* Drag & Drop Zone */}
      <div className="ml-32 0 w-full">
        <h1 className="text-white ml-32 mt-24 text-4xl">
          Drop here NFT to Mint
        </h1>
        {/* Drag and Drop */}
        <DndContext
          onDragEnd={handleDragEnd}
          className="w-6/12 border-2 border-white"
        >
          {!parent ? draggable : null}
          <Droppable id="droppable"></Droppable>
        </DndContext>
        <button
          onClick={() => {
            alert("Minted");
          }}
          className="ml-32 px-8 py-4 rounded-lg bg-black"
        >
          Mint
        </button>
      </div>
    </div>
  );
}

export default MintNFTPage;
