import "./App.css";
import { CreditsPage } from "./components/CreditsPage";
import { HomePage } from "./components/HomePage";
import { SearchResult } from "./components/SearchResult";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { VideoPlayer } from "./components/VideoPlayer";

function App() {
  const API = "UKRFPHPSDCyAi3376325uKFmobyzCvNNOsgmoI8G";
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search-result" element={<SearchResult API={API} />} />
        <Route path="/about" element={<CreditsPage />} />
        <Route path="/video-player" element={<VideoPlayer />} />
      </Routes>
    </>
  );
}

export default App;
