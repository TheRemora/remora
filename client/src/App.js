import "./styles/main.css";

import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
function App() {
  return (
    <div className="m-0 p-0 font-DM-Sans bg-background text-textWhite	 h-screen w-screen">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
