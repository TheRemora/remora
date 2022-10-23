import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MintNFTPage from "./pages/MintNFTPage";
function App() {
  return (
    <Router>
      <div className="m-0 p-0 font-DM-Sans bg-background text-textWhite	 h-screen w-screen">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/mint" element={<MintNFTPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
