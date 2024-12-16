import "./App.css";
import { HomePage } from "./components/HomePage";
import { SearchResult } from "./components/SearchResult";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const API = "UKRFPHPSDCyAi3376325uKFmobyzCvNNOsgmoI8G";
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search-result" element={<SearchResult API={API} />} />
      </Routes>
    </>
  );
}

export default App;
