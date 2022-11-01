import "./App.css";
import "./components/kepler/keplerIframe";
import WarmindoIframe from "./components/kepler/keplerIframe";
import MarketIframe from "./components/market-iframe/marketIframe";
import Sidebar from "./components/sidebar/sidebar";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<WarmindoIframe />} />
        <Route path="/market" element={<MarketIframe />} />
      </Routes>
    </div>
  );
}

export default App;
