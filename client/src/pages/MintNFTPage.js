import React from "react";
import Sidebar from "../components/Sidebar";
import { DnDProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function MintNFTPage() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="h-screen">
        <Sidebar />
      </div>
      {/* Drag & Drop Zone */}
      <div className="ml-32 bg-slate-400 w-full">
        <h1 className="text-white ml-32 mt-24 text-4xl">
          Drop here NFT to Mint
        </h1>
        <div className="ml-32 my-8 w-8/12 h-[50%] bg-slate-700"></div>
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
