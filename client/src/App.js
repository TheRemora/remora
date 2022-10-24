import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MintNFTPage from "./pages/MintNFTPage";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function App() {
  return (
    <Router>
      <div className="m-0 p-0 font-DM-Sans bg-background text-textWhite	 h-screen w-screen">
        <DndProvider backend={HTML5Backend}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/mint" element={<MintNFTPage />} />
          </Routes>
        </DndProvider>
      </div>
    </Router>
  );
}

export default App;
