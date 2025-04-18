// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Canvas from "./pages/Canvas";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/canvas" element={<Canvas />} />
      </Routes>
    </Router>
  );
}

export default App;
