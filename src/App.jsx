
import './App.css'
import { HomePage } from './components/HomePage'
import {SearchResult} from './components/SearchResult'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/search-result" element={<SearchResult/>} />
      </Routes>
    </>
  )
}

export default App
