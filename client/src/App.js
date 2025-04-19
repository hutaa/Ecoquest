import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Tree from "./Tree";
import Achievements from "./Achievements";
import Store from "./Store";

function App() {
  return (
    <div className="App" id="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tree" element={<Tree />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/store" element={<Store />} />
      </Routes>

    </div>
  );
}

export default App;
