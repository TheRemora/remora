import React from "react";
import Dropabble from "../components/Dropabble";
import Sidebar from "../components/Sidebar";

function MintNFTPage() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}

      <div className="h-screen">
        <Sidebar />
      </div>

      {/* Drag & Drop Zone */}
      <div className="ml-32 0 w-full">
        <Dropabble />
      </div>
    </div>
  );
}

export default MintNFTPage;
